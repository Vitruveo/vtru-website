/**
 * Create IBC Light Clients on Vitruveo
 *
 * This script creates sample IBC light clients for demo purposes.
 * Run once to populate the chain with queryable clients.
 *
 * Usage:
 *   PRIVATE_KEY=0x... node scripts/create-ibc-clients.js
 */

const { createWalletClient, createPublicClient, http, keccak256, encodePacked, encodeAbiParameters, parseAbiParameters, toHex, concat, pad, getAddress } = require('viem');
const { privateKeyToAccount } = require('viem/accounts');

// Compute checksummed address for the IBC precompile
const IBC_ADDRESS = getAddress('0x00000000000000000000000000000000000001bc');
const RPC_URL = 'https://rpc.vitruveo.ai';
const CHAIN_ID = 1490;

// Selector: keccak256("createClient(bytes32,bytes,bytes)")[:4]
const CREATE_CLIENT_SELECTOR = keccak256(new TextEncoder().encode('createClient(bytes32,bytes,bytes)')).slice(0, 10);

console.log('CREATE_CLIENT_SELECTOR:', CREATE_CLIENT_SELECTOR);

/**
 * Encode ClientState to binary format
 * Format: chainIDLen(2) + chainID(N) + trustNum(8) + trustDenom(8) +
 *         trustingPeriod(8) + unbondingPeriod(8) + maxClockDrift(8) +
 *         latestHeight(8) + frozenHeight(8)
 */
function encodeClientState(cs) {
  const chainIdBytes = new TextEncoder().encode(cs.chainId);
  const buffer = new ArrayBuffer(2 + chainIdBytes.length + 56);
  const view = new DataView(buffer);
  const uint8 = new Uint8Array(buffer);

  let pos = 0;

  // Chain ID length (2 bytes, big-endian)
  view.setUint16(pos, chainIdBytes.length, false);
  pos += 2;

  // Chain ID
  uint8.set(chainIdBytes, pos);
  pos += chainIdBytes.length;

  // Trust level numerator (8 bytes)
  view.setBigUint64(pos, BigInt(cs.trustLevelNumer), false);
  pos += 8;

  // Trust level denominator (8 bytes)
  view.setBigUint64(pos, BigInt(cs.trustLevelDenom), false);
  pos += 8;

  // Trusting period in seconds (8 bytes)
  view.setBigUint64(pos, BigInt(cs.trustingPeriod), false);
  pos += 8;

  // Unbonding period in seconds (8 bytes)
  view.setBigUint64(pos, BigInt(cs.unbondingPeriod), false);
  pos += 8;

  // Max clock drift in seconds (8 bytes)
  view.setBigUint64(pos, BigInt(cs.maxClockDrift), false);
  pos += 8;

  // Latest height (8 bytes)
  view.setBigUint64(pos, BigInt(cs.latestHeight), false);
  pos += 8;

  // Frozen height (8 bytes, 0 = not frozen)
  view.setBigUint64(pos, BigInt(cs.frozenHeight || 0), false);

  return uint8;
}

/**
 * Encode ConsensusState to binary format (exactly 104 bytes)
 * Format: timestamp(8) + root(32) + validatorsHash(32) + nextValidatorsHash(32)
 */
function encodeConsensusState(cs) {
  const buffer = new ArrayBuffer(104);
  const view = new DataView(buffer);
  const uint8 = new Uint8Array(buffer);

  // Timestamp (8 bytes)
  view.setBigUint64(0, BigInt(cs.timestamp), false);

  // Root - 32 bytes (remove 0x prefix if present)
  const root = cs.root.startsWith('0x') ? cs.root.slice(2) : cs.root;
  for (let i = 0; i < 32; i++) {
    uint8[8 + i] = parseInt(root.slice(i * 2, i * 2 + 2), 16);
  }

  // Validators hash - 32 bytes
  const valHash = cs.validatorsHash.startsWith('0x') ? cs.validatorsHash.slice(2) : cs.validatorsHash;
  for (let i = 0; i < 32; i++) {
    uint8[40 + i] = parseInt(valHash.slice(i * 2, i * 2 + 2), 16);
  }

  // Next validators hash - 32 bytes
  const nextValHash = cs.nextValidatorsHash.startsWith('0x') ? cs.nextValidatorsHash.slice(2) : cs.nextValidatorsHash;
  for (let i = 0; i < 32; i++) {
    uint8[72 + i] = parseInt(nextValHash.slice(i * 2, i * 2 + 2), 16);
  }

  return uint8;
}

/**
 * Convert string to bytes32 (right-padded)
 */
function stringToBytes32(str) {
  const bytes = new TextEncoder().encode(str);
  const result = new Uint8Array(32);
  result.set(bytes.slice(0, 32));
  return result;
}

/**
 * ABI encode bytes for calldata
 * Format: offset(32) + length(32) + data(padded to 32)
 */
function abiEncodeBytes(data, offsetFromHead) {
  const length = data.length;
  const paddedLength = Math.ceil(length / 32) * 32;

  // Offset word
  const offsetBytes = new Uint8Array(32);
  new DataView(offsetBytes.buffer).setBigUint64(24, BigInt(offsetFromHead), false);

  // Length word
  const lengthBytes = new Uint8Array(32);
  new DataView(lengthBytes.buffer).setBigUint64(24, BigInt(length), false);

  // Data (padded)
  const paddedData = new Uint8Array(paddedLength);
  paddedData.set(data);

  return { offsetBytes, lengthBytes, paddedData };
}

/**
 * Build createClient calldata
 */
function buildCreateClientCalldata(clientId, clientState, consensusState) {
  const clientIdBytes32 = stringToBytes32(clientId);
  const clientStateBytes = encodeClientState(clientState);
  const consensusStateBytes = encodeConsensusState(consensusState);

  // Head: clientId(32) + offset_clientState(32) + offset_consensusState(32) = 96 bytes
  const headSize = 96;

  // clientState starts at offset 96
  const csOffset = headSize;
  const csEncoded = abiEncodeBytes(clientStateBytes, csOffset);

  // consensusState starts after clientState
  const consOffset = csOffset + 32 + csEncoded.paddedData.length; // length word + padded data
  const consEncoded = abiEncodeBytes(consensusStateBytes, consOffset);

  // Build offset words
  const clientStateOffsetBytes = new Uint8Array(32);
  new DataView(clientStateOffsetBytes.buffer).setBigUint64(24, BigInt(csOffset), false);

  const consensusStateOffsetBytes = new Uint8Array(32);
  new DataView(consensusStateOffsetBytes.buffer).setBigUint64(24, BigInt(consOffset), false);

  // Concatenate everything
  const selector = new Uint8Array(4);
  const selectorHex = CREATE_CLIENT_SELECTOR.slice(2);
  for (let i = 0; i < 4; i++) {
    selector[i] = parseInt(selectorHex.slice(i * 2, i * 2 + 2), 16);
  }

  const totalLength = 4 + 32 + 32 + 32 + 32 + csEncoded.paddedData.length + 32 + consEncoded.paddedData.length;
  const calldata = new Uint8Array(totalLength);

  let pos = 0;
  calldata.set(selector, pos); pos += 4;
  calldata.set(clientIdBytes32, pos); pos += 32;
  calldata.set(clientStateOffsetBytes, pos); pos += 32;
  calldata.set(consensusStateOffsetBytes, pos); pos += 32;
  calldata.set(csEncoded.lengthBytes, pos); pos += 32;
  calldata.set(csEncoded.paddedData, pos); pos += csEncoded.paddedData.length;
  calldata.set(consEncoded.lengthBytes, pos); pos += 32;
  calldata.set(consEncoded.paddedData, pos);

  return '0x' + Array.from(calldata).map(b => b.toString(16).padStart(2, '0')).join('');
}

// ICS-23 Test Vectors from cosmos/ics23 repository
// These are real test proofs that can be verified
const ICS23_TEST_VECTORS = {
  tendermint: {
    // From testdata/tendermint/exist_middle.json
    root: '0x494b16e3a64a85df143b2881bdd3ec94c3f8e18b343e8ff9c2d61afd05d040c8',
    key: '0x513334656d766f39447145585735325257523835',
    value: '0x76616c75655f666f725f513334656d766f39447145585735325257523835',
    proof: '0x0ad1030a14513334656d766f39447145585735325257523835121e76616c75655f666f725f513334656d766f394471455857353252575238351a090801180120012a010022250801122101e231d775380f2d663651e213cc726660e2ce0a2f2e9ee12cbb7df32294104a8c222708011201011a2014af194c63500236e52cc290ab24244fab39a520ece7e20fa93f4c9ff80c6626222508011221017966d2ead34418db2eaa04c0dffb9316805e8a0d421d1270c8954c35ee3221382225080112210172339e20a49bb16795a99bd905b47f99c45e5e5a9e6b7fb223dc8fe6751e1bda222708011201011a2053dd1ecc25ff906a0ef4db37ee068f3d8ad6d1d49913eefb847a675a681c5ffa222708011201011a20de90f9951a19497be7e389e02aa79e26faf77080e740e8743249a17a537f287d22250801122101ad4e53e981afc5a71e34ab0c4ffbccf1b468414d9d0939bd08edbd2461bc944a222708011201011a209b4cf89c3995b9dd66d58ab088846b2c6b59c52c6d10ec1d759ca9e9aa5eef5c222508011221013928a078bd66ab3949f5b1846b6d354dbdc1968a416607c7d91555ca26716667222708011201011a20d2d82cf8915b9ae6f92c7eae343e37d312ace05e654ce47acdf57d0a5490b873'
  },
  iavl: {
    // From testdata/iavl/exist_middle.json
    root: '0xce93fb31420cca24940fd7e8742ca1061b51c5d3c5438b68bf0526bc93e45274',
    key: '0x367a757a4f7845416530357967617a57634b6b70',
    value: '0x76616c75655f666f725f367a757a4f7845416530357967617a57634b6b70',
    proof: '0x0ad7030a14367a757a4f7845416530357967617a57634b6b70121e76616c75655f666f725f367a757a4f7845416530357967617a57634b6b701a0b0801180120012a03000202222b08011204040602201a2120e573ba32e4d48752f750145e8f49272d81e5f4d81f418c6c8e01e2bd2bb03e92222b08011204060e02201a21202f7453b9df6afecefcecd464d557701685ceeddcf82e2064f5d6a751fe6f448c222b08011204081a02201a21200a6025a49f3aff53a9fd7bd60e0f241897bdff7ff5b0386de6e582fa60a2ff642229080112250a3402209bae0613f7ecad99b5b448714f1b66929f06ca05e92dad7a7fc9c6243475135020222a080112260e80010220e508b7f979ad0f1601b3442603f928b3aba91287a4c988045a88fa1bf26df17120222a0801122610cc0102201abeb41c3a4ec85c07a77af6017dcb2171a1d5c278b300cc361d7b51c593b7cf20222c0801120512fa0202201a212055337b4192edc05ba1ca4c51b110aa56feb46b5830ba19ee682c9c88a48cdfee222c08011205149c0602201a212092fdf4836b2561fb018c29660262b102761f25920ed43ae46bc4153a55fd161b222c0801120516d80c02201a212004ddd20b8bd3c1461293922bb3f9404eecaa2d1869d651f1a304a4757bd5f646'
  }
};

// Sample IBC clients to create
// These use ICS-23 test vector root hashes for verifiable proofs
const CLIENTS = [
  {
    // New client ID with ICS-23 Tendermint test root for verifiable proofs
    clientId: 'ics23-tendermint',
    clientState: {
      chainId: 'cosmoshub-4',
      trustLevelNumer: 2,
      trustLevelDenom: 3,
      trustingPeriod: 1209600, // 14 days in seconds
      unbondingPeriod: 1814400, // 21 days in seconds
      maxClockDrift: 600, // 10 minutes
      latestHeight: 1000000,
      frozenHeight: 0
    },
    consensusState: {
      timestamp: Math.floor(Date.now() / 1000) - 3600, // 1 hour ago
      root: ICS23_TEST_VECTORS.tendermint.root,
      validatorsHash: '0x' + 'b'.repeat(64),
      nextValidatorsHash: '0x' + 'c'.repeat(64)
    }
  },
  {
    // New client ID with ICS-23 IAVL test root for verifiable proofs
    clientId: 'ics23-iavl',
    clientState: {
      chainId: 'osmosis-1',
      trustLevelNumer: 2,
      trustLevelDenom: 3,
      trustingPeriod: 1209600,
      unbondingPeriod: 1814400,
      maxClockDrift: 600,
      latestHeight: 5000000,
      frozenHeight: 0
    },
    consensusState: {
      timestamp: Math.floor(Date.now() / 1000) - 3600,
      root: ICS23_TEST_VECTORS.iavl.root,
      validatorsHash: '0x' + 'e'.repeat(64),
      nextValidatorsHash: '0x' + 'f'.repeat(64)
    }
  }
];

// Export test vectors for use in frontend
console.log('\nICS-23 Test Vectors for frontend:');
console.log(JSON.stringify(ICS23_TEST_VECTORS, null, 2));

async function main() {
  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey) {
    console.error('Error: PRIVATE_KEY environment variable required');
    console.error('Usage: PRIVATE_KEY=0x... node scripts/create-ibc-clients.js');
    process.exit(1);
  }

  const account = privateKeyToAccount(privateKey);
  console.log('Using account:', account.address);

  const publicClient = createPublicClient({
    transport: http(RPC_URL)
  });

  const walletClient = createWalletClient({
    account,
    chain: {
      id: CHAIN_ID,
      name: 'Vitruveo',
      nativeCurrency: { name: 'VTRU', symbol: 'VTRU', decimals: 18 },
      rpcUrls: { default: { http: [RPC_URL] } }
    },
    transport: http(RPC_URL)
  });

  // Check balance
  const balance = await publicClient.getBalance({ address: account.address });
  console.log('Balance:', (Number(balance) / 1e18).toFixed(4), 'VTRU');

  if (balance === 0n) {
    console.error('Error: Account has no VTRU for gas');
    process.exit(1);
  }

  // Create each client
  for (const client of CLIENTS) {
    console.log(`\nCreating IBC client: ${client.clientId}`);
    console.log('  Chain ID:', client.clientState.chainId);
    console.log('  Latest Height:', client.clientState.latestHeight);

    const calldata = buildCreateClientCalldata(
      client.clientId,
      client.clientState,
      client.consensusState
    );

    console.log('  Calldata length:', (calldata.length - 2) / 2, 'bytes');

    try {
      // Estimate gas first
      const gasEstimate = await publicClient.estimateGas({
        account: account.address,
        to: IBC_ADDRESS,
        data: calldata
      });
      console.log('  Gas estimate:', gasEstimate.toString());

      // Send transaction
      const hash = await walletClient.sendTransaction({
        to: IBC_ADDRESS,
        data: calldata,
        gas: gasEstimate + 50000n // Add buffer
      });

      console.log('  Transaction hash:', hash);

      // Wait for receipt
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      console.log('  Status:', receipt.status === 'success' ? 'SUCCESS' : 'FAILED');
      console.log('  Gas used:', receipt.gasUsed.toString());

    } catch (error) {
      console.error('  Error:', error.message);
      if (error.message.includes('client already exists')) {
        console.log('  (Client already exists, skipping)');
      }
    }
  }

  console.log('\nDone!');
}

main().catch(console.error);
