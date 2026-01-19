'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PSC_ADDRESSES, NETWORK_CONFIG } from '../../lib/psc-constants';

// Sample IBC clients (created on-chain by scripts/create-ibc-clients.js)
const SAMPLE_CLIENTS = [
  {
    id: 'ics23-tendermint',
    name: 'ICS-23 Tendermint',
    description: 'cosmoshub-4 with ICS-23 test root',
    txHash: '0x6295537f918f7cad6b274996b7b2f182e887e098f1c139687b774e219137f118',
    height: 1000000,
    hasTestProof: true
  },
  {
    id: 'ics23-iavl',
    name: 'ICS-23 IAVL',
    description: 'osmosis-1 with ICS-23 test root',
    txHash: '0x11720b6c0460320212254c67f13e9de619f0268d7bf3aac5e8825386ff2b70d0',
    height: 5000000,
    hasTestProof: true
  },
  {
    id: '07-tendermint-0',
    name: 'Cosmos Hub',
    description: 'cosmoshub-4 light client',
    txHash: '0x09769376ef28bce93c8fcb5c4676cae2c13b7002a16035e699399b8db3ac15cb',
    height: 1000000
  },
  {
    id: 'osmosis-1',
    name: 'Osmosis',
    description: 'osmosis-1 light client',
    txHash: '0x06344aca5bd1ec0c0b89a2ee3efd7194829fbaf6d45e61f396778d9c4aa5d63f',
    height: 5000000
  },
  {
    id: 'celestia-1',
    name: 'Celestia',
    description: 'celestia light client',
    txHash: '0xacfa6eb68c4ade0465f33712230fc0a547d8c83d5c1f5db490aa87a6a012f461',
    height: 2000000
  }
];

// ICS-23 Test Vectors from cosmos/ics23 repository (https://github.com/cosmos/ics23)
// These are real Merkle proofs that can be verified against clients with matching root hashes
const SAMPLE_PROOFS = [
  {
    name: 'Tendermint Proof',
    description: 'From cosmos/ics23 testdata/tendermint/exist_middle.json',
    clientId: 'ics23-tendermint',
    height: 1000000,
    // Key is hex-encoded "Q34emvo9DqEXW52RWR85"
    path: '0x513334656d766f39447145585735325257523835',
    // Value is hex-encoded "value_for_Q34emvo9DqEXW52RWR85"
    value: '0x76616c75655f666f725f513334656d766f39447145585735325257523835',
    proof: '0x0ad1030a14513334656d766f39447145585735325257523835121e76616c75655f666f725f513334656d766f394471455857353252575238351a090801180120012a010022250801122101e231d775380f2d663651e213cc726660e2ce0a2f2e9ee12cbb7df32294104a8c222708011201011a2014af194c63500236e52cc290ab24244fab39a520ece7e20fa93f4c9ff80c6626222508011221017966d2ead34418db2eaa04c0dffb9316805e8a0d421d1270c8954c35ee3221382225080112210172339e20a49bb16795a99bd905b47f99c45e5e5a9e6b7fb223dc8fe6751e1bda222708011201011a2053dd1ecc25ff906a0ef4db37ee068f3d8ad6d1d49913eefb847a675a681c5ffa222708011201011a20de90f9951a19497be7e389e02aa79e26faf77080e740e8743249a17a537f287d22250801122101ad4e53e981afc5a71e34ab0c4ffbccf1b468414d9d0939bd08edbd2461bc944a222708011201011a209b4cf89c3995b9dd66d58ab088846b2c6b59c52c6d10ec1d759ca9e9aa5eef5c222508011221013928a078bd66ab3949f5b1846b6d354dbdc1968a416607c7d91555ca26716667222708011201011a20d2d82cf8915b9ae6f92c7eae343e37d312ace05e654ce47acdf57d0a5490b873',
    source: 'https://github.com/cosmos/ics23/blob/master/testdata/tendermint/exist_middle.json'
  },
  {
    name: 'IAVL Proof',
    description: 'From cosmos/ics23 testdata/iavl/exist_middle.json',
    clientId: 'ics23-iavl',
    height: 5000000,
    // Key is hex-encoded "6zuzOxEAe05ygazWcKkp"
    path: '0x367a757a4f7845416530357967617a57634b6b70',
    // Value is hex-encoded "value_for_6zuzOxEAe05ygazWcKkp"
    value: '0x76616c75655f666f725f367a757a4f7845416530357967617a57634b6b70',
    proof: '0x0ad7030a14367a757a4f7845416530357967617a57634b6b70121e76616c75655f666f725f367a757a4f7845416530357967617a57634b6b701a0b0801180120012a03000202222b08011204040602201a2120e573ba32e4d48752f750145e8f49272d81e5f4d81f418c6c8e01e2bd2bb03e92222b08011204060e02201a21202f7453b9df6afecefcecd464d557701685ceeddcf82e2064f5d6a751fe6f448c222b08011204081a02201a21200a6025a49f3aff53a9fd7bd60e0f241897bdff7ff5b0386de6e582fa60a2ff642229080112250a3402209bae0613f7ecad99b5b448714f1b66929f06ca05e92dad7a7fc9c6243475135020222a080112260e80010220e508b7f979ad0f1601b3442603f928b3aba91287a4c988045a88fa1bf26df17120222a0801122610cc0102201abeb41c3a4ec85c07a77af6017dcb2171a1d5c278b300cc361d7b51c593b7cf20222c0801120512fa0202201a212055337b4192edc05ba1ca4c51b110aa56feb46b5830ba19ee682c9c88a48cdfee222c08011205149c0602201a212092fdf4836b2561fb018c29660262b102761f25920ed43ae46bc4153a55fd161b222c0801120516d80c02201a212004ddd20b8bd3c1461293922bb3f9404eecaa2d1869d651f1a304a4757bd5f646',
    source: 'https://github.com/cosmos/ics23/blob/master/testdata/iavl/exist_middle.json'
  }
];

export function IbcExample() {
  const [activeTab, setActiveTab] = useState('demo');
  const [demoMode, setDemoMode] = useState('query'); // 'query' or 'verify'
  const [selectedClient, setSelectedClient] = useState(null);
  const [customClientId, setCustomClientId] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Verify Membership form state
  const [verifyClientId, setVerifyClientId] = useState('07-tendermint-0');
  const [verifyHeight, setVerifyHeight] = useState('1000000');
  const [verifyPath, setVerifyPath] = useState('');
  const [verifyValue, setVerifyValue] = useState('');
  const [verifyProof, setVerifyProof] = useState('');
  const [selectedProof, setSelectedProof] = useState(null);

  // Load a sample proof into the form
  const loadSampleProof = (proof) => {
    setSelectedProof(proof);
    setVerifyClientId(proof.clientId);
    setVerifyHeight(proof.height.toString());
    setVerifyPath(proof.path);
    setVerifyValue(proof.value);
    setVerifyProof(proof.proof);
    setResult(null);
    setError(null);
  };

  // Download proof as JSON file
  const downloadProof = (proof, e) => {
    e.stopPropagation();
    const data = {
      clientId: proof.clientId,
      height: proof.height,
      path: proof.path,
      value: proof.value,
      proof: proof.proof,
      source: proof.source,
      description: proof.description
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${proof.name.toLowerCase().replace(/\s+/g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Selectors
  const GET_CLIENT_STATE_SELECTOR = '0xc0317426';  // keccak256("getClientState(bytes32)")[:4]
  const VERIFY_MEMBERSHIP_SELECTOR = '0x76f11381'; // keccak256("verifyMembership(bytes32,uint64,bytes,bytes,bytes)")[:4]

  // Convert string to bytes32 (right-padded with zeros)
  const stringToBytes32 = (str) => {
    const bytes = new TextEncoder().encode(str);
    let hex = '';
    for (const byte of bytes) {
      hex += byte.toString(16).padStart(2, '0');
    }
    return hex.padEnd(64, '0'); // Pad to 32 bytes
  };

  const queryClientState = async (clientId) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Format: selector(4) + clientId(bytes32)
      const clientIdBytes32 = stringToBytes32(clientId);
      const data = GET_CLIENT_STATE_SELECTOR + clientIdBytes32;

      console.log('IBC PSC call:');
      console.log('  Client ID:', clientId);
      console.log('  Client ID as bytes32:', '0x' + clientIdBytes32);
      console.log('  Data:', data);

      const response = await fetch(NETWORK_CONFIG.rpc, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'eth_call',
          params: [{
            to: PSC_ADDRESSES.IBC,
            data
          }, 'latest']
        })
      });

      const json = await response.json();
      console.log('  Response:', json);

      // Handle "client not found" as a valid "not found" result
      if (json.error) {
        const errMsg = json.error.message || '';
        if (errMsg.includes('client not found')) {
          setResult({
            type: 'query',
            clientId,
            exists: false,
            message: 'No IBC light client exists with this ID. Clients must be created using createClient() before they can be queried.'
          });
          return;
        }
        throw new Error(errMsg);
      }

      // If we got data back, the client exists
      const hasState = json.result && json.result !== '0x' && json.result.length > 66;

      setResult({
        type: 'query',
        clientId,
        exists: hasState,
        rawResponse: json.result,
        stateSize: hasState ? (json.result.length - 2) / 2 : 0
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ABI encode bytes with offset
  const abiEncodeBytes = (hexStr) => {
    // Remove 0x prefix if present
    const hex = hexStr.startsWith('0x') ? hexStr.slice(2) : hexStr;
    const length = hex.length / 2;
    const paddedLength = Math.ceil(length / 32) * 32;
    const lengthHex = length.toString(16).padStart(64, '0');
    const paddedData = hex.padEnd(paddedLength * 2, '0');
    return { lengthHex, paddedData, byteLength: length };
  };

  const verifyMembership = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const clientIdBytes32 = stringToBytes32(verifyClientId);
      const heightHex = BigInt(verifyHeight).toString(16).padStart(16, '0'); // uint64

      // For bytes params, we need ABI encoding with dynamic offsets
      // Format: selector(4) + clientId(32) + height(8 padded to 32) + offset_proof(32) + offset_path(32) + offset_value(32) + proof_data + path_data + value_data

      const proofData = abiEncodeBytes(verifyProof || '0x');
      const pathData = abiEncodeBytes(verifyPath || '0x');
      const valueData = abiEncodeBytes(verifyValue || '0x');

      // Head size: clientId(32) + height(32) + 3 offsets(96) = 160 bytes
      const headSize = 160;

      // Proof starts at offset 160
      const proofOffset = headSize;
      // Path starts after proof (length word + padded data)
      const pathOffset = proofOffset + 32 + (proofData.paddedData.length / 2 || 32);
      // Value starts after path
      const valueOffset = pathOffset + 32 + (pathData.paddedData.length / 2 || 32);

      // Build calldata
      let data = VERIFY_MEMBERSHIP_SELECTOR;
      data += clientIdBytes32;
      data += heightHex.padStart(64, '0'); // height as uint64 in 32 bytes
      data += proofOffset.toString(16).padStart(64, '0');
      data += pathOffset.toString(16).padStart(64, '0');
      data += valueOffset.toString(16).padStart(64, '0');
      data += proofData.lengthHex + (proofData.paddedData || ''.padEnd(64, '0'));
      data += pathData.lengthHex + (pathData.paddedData || ''.padEnd(64, '0'));
      data += valueData.lengthHex + (valueData.paddedData || ''.padEnd(64, '0'));

      console.log('verifyMembership call:');
      console.log('  Client ID:', verifyClientId);
      console.log('  Height:', verifyHeight);
      console.log('  Data length:', (data.length - 2) / 2, 'bytes');

      const response = await fetch(NETWORK_CONFIG.rpc, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'eth_call',
          params: [{
            to: PSC_ADDRESSES.IBC,
            data
          }, 'latest']
        })
      });

      const json = await response.json();
      console.log('  Response:', json);

      if (json.error) {
        throw new Error(json.error.message || 'Verification failed');
      }

      // Result is a bool (1 = valid, 0 = invalid)
      const isValid = json.result && BigInt(json.result) === 1n;

      setResult({
        type: 'verify',
        clientId: verifyClientId,
        height: verifyHeight,
        isValid,
        rawResponse: json.result
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePresetQuery = (client) => {
    setSelectedClient(client);
    queryClientState(client.id);
  };

  const handleCustomQuery = () => {
    if (!customClientId.trim()) {
      setError('Please enter a client ID');
      return;
    }
    setSelectedClient({ id: customClientId, name: 'Custom', description: 'User-provided' });
    queryClientState(customClientId.trim());
  };

  const codeSnippet = `// Query IBC client state using Vitruveo PSC
const RPC = '${NETWORK_CONFIG.rpc}';
const IBC_ADDRESS = '${PSC_ADDRESSES.IBC}';

// Selector: keccak256("getClientState(bytes32)")[:4]
const GET_CLIENT_STATE = '0xc0317426';

// Convert client ID string to bytes32 (right-padded)
function stringToBytes32(str) {
  const bytes = new TextEncoder().encode(str);
  let hex = '';
  for (const b of bytes) hex += b.toString(16).padStart(2, '0');
  return hex.padEnd(64, '0'); // Pad to 32 bytes
}

const clientId = '07-tendermint-0';
const data = GET_CLIENT_STATE + stringToBytes32(clientId);

const response = await fetch(RPC, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_call',
    params: [{ to: IBC_ADDRESS, data }, 'latest']
  })
});

const { result } = await response.json();
// Returns ABI-encoded bytes (offset + length + data)
const hasState = result && result !== '0x' && result.length > 130;
console.log(hasState ? 'Client exists!' : 'Client not found');`;

  const soliditySnippet = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IIBC {
    function createClient(
        bytes32 clientId,
        bytes calldata clientState,
        bytes calldata consensusState
    ) external returns (bool);

    function updateClient(
        bytes32 clientId,
        bytes calldata trustedHeader,
        bytes calldata trustedValidators,
        bytes calldata untrustedHeader,
        bytes calldata untrustedValidators
    ) external returns (bytes32);

    function getClientState(bytes32 clientId)
        external view returns (bytes memory);

    function getConsensusState(bytes32 clientId, uint64 height)
        external view returns (bytes memory);

    function verifyMembership(
        bytes32 clientId,
        uint64 height,
        bytes calldata proof,
        bytes calldata path,
        bytes calldata value
    ) external view returns (bool);

    function verifyNonMembership(
        bytes32 clientId,
        uint64 height,
        bytes calldata proof,
        bytes calldata path
    ) external view returns (bool);
}

contract CosmosVerifier {
    IIBC constant ibc = IIBC(${PSC_ADDRESSES.IBC});

    /// @notice Check if an IBC client exists
    /// @param clientId Client identifier as bytes32 (e.g., "07-tendermint-0" right-padded)
    function clientExists(bytes32 clientId) public view returns (bool) {
        bytes memory state = ibc.getClientState(clientId);
        return state.length > 0;
    }

    /// @notice Verify a value exists at a path in a Cosmos chain
    function verifyCosmosState(
        bytes32 clientId,
        uint64 height,
        bytes calldata proof,
        bytes calldata path,
        bytes calldata expectedValue
    ) public view returns (bool) {
        return ibc.verifyMembership(clientId, height, proof, path, expectedValue);
    }

    /// @notice Helper to convert string to bytes32
    function stringToBytes32(string memory str) public pure returns (bytes32) {
        bytes32 result;
        assembly {
            result := mload(add(str, 32))
        }
        return result;
    }
}`;

  return (
    <div className="border-top border-secondary pt-5 mt-5">
      <h3 className="text-white mb-4">Try It: IBC Light Client</h3>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'demo' ? 'active' : ''}`}
            onClick={() => setActiveTab('demo')}
          >
            Demo
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'client' ? 'active' : ''}`}
            onClick={() => setActiveTab('client')}
          >
            Client Code
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'solidity' ? 'active' : ''}`}
            onClick={() => setActiveTab('solidity')}
          >
            Smart Contract
          </button>
        </li>
      </ul>

      {/* Demo Tab */}
      {activeTab === 'demo' && (
        <div>
          {/* Demo Mode Toggle */}
          <div className="demo-mode-toggle mb-4">
            <button
              className={`mode-btn ${demoMode === 'query' ? 'active' : ''}`}
              onClick={() => { setDemoMode('query'); setResult(null); setError(null); }}
            >
              Query Client
            </button>
            <button
              className={`mode-btn ${demoMode === 'verify' ? 'active' : ''}`}
              onClick={() => { setDemoMode('verify'); setResult(null); setError(null); }}
            >
              Verify Membership
            </button>
          </div>

          {/* Query Client Mode */}
          {demoMode === 'query' && (
            <>
              <p className="text-muted-light mb-4">
                Query IBC light client state. Click a sample client or enter your own ID.
              </p>

              {/* Sample Client Types */}
              <div className="client-grid mb-4">
                {SAMPLE_CLIENTS.map((client, idx) => (
                  <button
                    key={idx}
                    className={`client-card ${selectedClient?.id === client.id ? 'selected' : ''}`}
                    onClick={() => handlePresetQuery(client)}
                    disabled={loading}
                  >
                    <div className="name">{client.name}</div>
                    <div className="client-id">{client.id}</div>
                    <div className="desc">{client.description}</div>
                  </button>
                ))}
              </div>

              {/* Custom Query */}
              <div className="custom-query mb-4">
                <div className="d-flex gap-2 align-items-end">
                  <div className="flex-grow-1">
                    <label className="form-label text-white small">Custom Client ID</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-secondary font-monospace"
                      value={customClientId}
                      onChange={(e) => setCustomClientId(e.target.value)}
                      placeholder="e.g., 07-tendermint-0"
                    />
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={handleCustomQuery}
                    disabled={loading}
                  >
                    {loading ? 'Querying...' : 'Query'}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Verify Membership Mode */}
          {demoMode === 'verify' && (
            <>
              <p className="text-muted-light mb-4">
                Verify a Merkle proof against an IBC light client. Proofs are validated using
                the consensus state at the specified height.
              </p>

              {/* Sample Proofs */}
              <div className="mb-4">
                <label className="form-label text-white small">Load Sample Proof</label>
                <div className="proof-grid">
                  {SAMPLE_PROOFS.map((proof, idx) => (
                    <button
                      key={idx}
                      className={`proof-card ${selectedProof?.name === proof.name ? 'selected' : ''}`}
                      onClick={() => loadSampleProof(proof)}
                    >
                      <div className="proof-name">{proof.name}</div>
                      <div className="proof-client">{proof.clientId}</div>
                      <div className="proof-desc">{proof.description}</div>
                      <div className="proof-actions">
                        <a
                          href={proof.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="proof-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View source
                        </a>
                        <span className="proof-sep">|</span>
                        <span
                          className="proof-download"
                          role="button"
                          onClick={(e) => downloadProof(proof, e)}
                        >
                          Download JSON
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parsed Proof Data Preview */}
              {selectedProof && (
                <div className="proof-preview mb-4">
                  <div className="preview-header">
                    <h6 className="text-white mb-0">Parsed Proof Data</h6>
                    <button
                      className="btn btn-sm btn-outline-light"
                      onClick={(e) => downloadProof(selectedProof, e)}
                    >
                      Download JSON
                    </button>
                  </div>
                  <div className="preview-grid">
                    <div className="preview-item">
                      <span className="preview-label">Client ID</span>
                      <code className="preview-value">{selectedProof.clientId}</code>
                    </div>
                    <div className="preview-item">
                      <span className="preview-label">Height</span>
                      <code className="preview-value">{selectedProof.height}</code>
                    </div>
                    <div className="preview-item full-width">
                      <span className="preview-label">Path (hex → decoded)</span>
                      <code className="preview-value">{selectedProof.path}</code>
                      <span className="preview-decoded">
                        → "{(() => {
                          try {
                            const hex = selectedProof.path.startsWith('0x') ? selectedProof.path.slice(2) : selectedProof.path;
                            const bytes = hex.match(/.{1,2}/g).map(b => parseInt(b, 16));
                            return String.fromCharCode(...bytes);
                          } catch { return '(binary)'; }
                        })()}"
                      </span>
                    </div>
                    <div className="preview-item full-width">
                      <span className="preview-label">Value (hex → decoded)</span>
                      <code className="preview-value">{selectedProof.value}</code>
                      <span className="preview-decoded">
                        → "{(() => {
                          try {
                            const hex = selectedProof.value.startsWith('0x') ? selectedProof.value.slice(2) : selectedProof.value;
                            const bytes = hex.match(/.{1,2}/g).map(b => parseInt(b, 16));
                            return String.fromCharCode(...bytes);
                          } catch { return '(binary)'; }
                        })()}"
                      </span>
                    </div>
                    <div className="preview-item full-width">
                      <div className="proof-section">
                        <div className="proof-header-row">
                          <span className="preview-label">ICS-23 Merkle Proof ({((selectedProof.proof.length - 2) / 2)} bytes)</span>
                          <button
                            className="btn btn-sm btn-link text-vtru-green p-0"
                            onClick={() => {
                              navigator.clipboard.writeText(selectedProof.proof);
                            }}
                          >
                            Copy
                          </button>
                        </div>
                        <div className="proof-full-hex">
                          {selectedProof.proof}
                        </div>
                        <div className="proof-info mt-2">
                          <span className="text-muted-light small">
                            ICS-23 commitment proof containing leaf operation + inner operations for Merkle path.
                            <a
                              href="https://github.com/cosmos/ics23"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ms-1 text-vtru-green"
                            >
                              Learn more →
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="verify-form">
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label text-white small">Client ID</label>
                    <select
                      className="form-select bg-dark text-white border-secondary"
                      value={verifyClientId}
                      onChange={(e) => setVerifyClientId(e.target.value)}
                    >
                      {SAMPLE_CLIENTS.map((client) => (
                        <option key={client.id} value={client.id}>
                          {client.name} ({client.id})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-white small">Height</label>
                    <input
                      type="number"
                      className="form-control bg-dark text-white border-secondary"
                      value={verifyHeight}
                      onChange={(e) => setVerifyHeight(e.target.value)}
                      placeholder="e.g., 1000000"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label text-white small">
                    Path <span className="text-muted-light">(hex encoded IBC path)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary font-monospace"
                    value={verifyPath}
                    onChange={(e) => setVerifyPath(e.target.value)}
                    placeholder="0x... (e.g., commitments/ports/transfer/channels/channel-0/sequences/1)"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-white small">
                    Value <span className="text-muted-light">(hex encoded expected value)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary font-monospace"
                    value={verifyValue}
                    onChange={(e) => setVerifyValue(e.target.value)}
                    placeholder="0x... (the value that should exist at the path)"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-white small">
                    Proof <span className="text-muted-light">(hex encoded ICS-23 Merkle proof)</span>
                  </label>
                  <textarea
                    className="form-control bg-dark text-white border-secondary font-monospace"
                    rows={3}
                    value={verifyProof}
                    onChange={(e) => setVerifyProof(e.target.value)}
                    placeholder="0x... (ICS-23 commitment proof from Cosmos chain)"
                  />
                </div>

                <button
                  className="btn btn-primary"
                  onClick={verifyMembership}
                  disabled={loading}
                >
                  {loading ? 'Verifying...' : 'Verify Proof'}
                </button>
              </div>
            </>
          )}

          {/* Error */}
          {error && (
            <div className="alert alert-danger mt-4">{error}</div>
          )}

          {/* Query Result */}
          {result && result.type === 'query' && (
            <div className={`result-card ${result.exists ? 'exists' : 'not-found'}`}>
              <div className="result-icon">
                {result.exists ? '✓' : '∅'}
              </div>
              <div className="result-text">
                <div className="result-title">
                  {result.exists ? 'Client Found' : 'Client Not Found'}
                </div>
                <div className="result-details">
                  {result.exists
                    ? `Client "${result.clientId}" exists with ${result.stateSize} bytes of state`
                    : result.message || `No client found with ID "${result.clientId}"`}
                </div>
                {result.exists && selectedClient?.txHash && (
                  <div className="result-tx mt-2">
                    <a
                      href={`${NETWORK_CONFIG.explorer}/tx/${selectedClient.txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tx-link"
                    >
                      View creation tx on explorer →
                    </a>
                  </div>
                )}
              </div>
              {result.exists && (
                <div className="result-meta">
                  <span>State size: {result.stateSize} bytes</span>
                </div>
              )}
            </div>
          )}

          {/* Verify Result */}
          {result && result.type === 'verify' && (
            <div className={`result-card mt-4 ${result.isValid ? 'exists' : 'not-found'}`}>
              <div className="result-icon">
                {result.isValid ? '✓' : '✗'}
              </div>
              <div className="result-text">
                <div className="result-title">
                  {result.isValid ? 'Proof Valid' : 'Proof Invalid'}
                </div>
                <div className="result-details">
                  {result.isValid
                    ? `The value exists at the specified path in client "${result.clientId}" at height ${result.height}`
                    : `Verification failed for client "${result.clientId}" at height ${result.height}`}
                </div>
              </div>
            </div>
          )}

          {!result && !error && demoMode === 'query' && (
            <div className="result-placeholder">
              <p className="text-muted-light mb-0">
                Click a client above or enter a custom ID to query its state
              </p>
            </div>
          )}

          <div className="info-box mt-4">
            <h6 className="text-white mb-2">About IBC Light Clients</h6>
            <p className="text-muted-light small mb-0">
              IBC (Inter-Blockchain Communication) enables trustless verification of state from
              Cosmos chains like Cosmos Hub, Osmosis, and Celestia. Light clients must be created
              and updated before membership proofs can be verified. The PSC supports full
              Tendermint light client verification including header validation and state proofs.
            </p>
          </div>
        </div>
      )}

      {/* Client Code Tab */}
      {activeTab === 'client' && (
        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          customStyle={{ borderRadius: '8px', fontSize: '14px' }}
        >
          {codeSnippet}
        </SyntaxHighlighter>
      )}

      {/* Smart Contract Tab */}
      {activeTab === 'solidity' && (
        <SyntaxHighlighter
          language="solidity"
          style={oneDark}
          customStyle={{ borderRadius: '8px', fontSize: '14px' }}
        >
          {soliditySnippet}
        </SyntaxHighlighter>
      )}

      <style jsx>{`
        .nav-tabs {
          border-bottom: 1px solid #333;
        }
        .nav-tabs .nav-link {
          color: #888;
          border: none;
          border-bottom: 2px solid transparent;
          background: transparent;
          padding: 0.5rem 1rem;
        }
        .nav-tabs .nav-link:hover {
          color: #fff;
          border-bottom-color: #555;
        }
        .nav-tabs .nav-link.active {
          color: #a1ff75;
          border-bottom-color: #a1ff75;
          background: transparent;
        }
        .demo-mode-toggle {
          display: flex;
          gap: 0.5rem;
          background: var(--vtru-dark-3);
          padding: 0.25rem;
          border-radius: 8px;
          width: fit-content;
        }
        .mode-btn {
          padding: 0.5rem 1rem;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.6);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 0.875rem;
        }
        .mode-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
        }
        .mode-btn.active {
          background: var(--vtru-green);
          color: #000;
          font-weight: 500;
        }
        .verify-form {
          background: var(--vtru-dark-3);
          border-radius: 12px;
          padding: 1.5rem;
        }
        .proof-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }
        .proof-card {
          background: var(--vtru-dark-3);
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 1rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
        }
        .proof-card:hover {
          border-color: var(--vtru-green);
        }
        .proof-card.selected {
          border-color: var(--vtru-green);
          background: rgba(161, 255, 117, 0.1);
        }
        .proof-name {
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.25rem;
        }
        .proof-client {
          font-family: var(--bs-font-monospace);
          font-size: 0.75rem;
          color: var(--vtru-green);
          margin-bottom: 0.5rem;
        }
        .proof-desc {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 0.5rem;
        }
        .proof-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
        }
        .proof-link {
          color: var(--vtru-green);
          text-decoration: none;
        }
        .proof-link:hover {
          text-decoration: underline;
        }
        .proof-sep {
          color: rgba(255, 255, 255, 0.3);
        }
        .proof-download {
          background: none;
          border: none;
          color: #60a5fa;
          cursor: pointer;
          padding: 0;
          font-size: 0.75rem;
        }
        .proof-download:hover {
          text-decoration: underline;
        }
        .proof-preview {
          background: var(--vtru-dark-3);
          border-radius: 12px;
          padding: 1.25rem;
          border: 1px solid rgba(161, 255, 117, 0.2);
        }
        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .preview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .preview-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .preview-item.full-width {
          grid-column: 1 / -1;
        }
        .preview-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }
        .preview-value {
          font-family: var(--bs-font-monospace);
          font-size: 0.8rem;
          color: var(--vtru-green);
          word-break: break-all;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }
        .preview-decoded {
          font-size: 0.75rem;
          color: #60a5fa;
          margin-top: 0.25rem;
        }
        .proof-hex {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.6);
        }
        .proof-section {
          width: 100%;
        }
        .proof-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .proof-full-hex {
          font-family: var(--bs-font-monospace);
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.5);
          word-break: break-all;
          background: rgba(0, 0, 0, 0.4);
          padding: 0.75rem;
          border-radius: 6px;
          max-height: 120px;
          overflow-y: auto;
          line-height: 1.4;
        }
        .proof-info {
          padding-top: 0.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .client-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
        }
        .client-card {
          background: var(--vtru-dark-3);
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 1rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
        }
        .client-card:hover {
          border-color: var(--vtru-green);
        }
        .client-card.selected {
          border-color: var(--vtru-green);
          background: rgba(161, 255, 117, 0.1);
        }
        .client-card .name {
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.25rem;
        }
        .client-card .client-id {
          font-family: var(--bs-font-monospace);
          font-size: 0.75rem;
          color: var(--vtru-green);
          margin-bottom: 0.5rem;
        }
        .client-card .desc {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }
        .result-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--vtru-dark-3);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1rem;
          border-left: 4px solid;
        }
        .result-card.exists {
          border-left-color: var(--vtru-green);
        }
        .result-card.not-found {
          border-left-color: #f59e0b;
        }
        .result-card.info {
          border-left-color: #60a5fa;
        }
        .result-card.info .result-icon {
          background: rgba(96, 165, 250, 0.2);
          color: #60a5fa;
        }
        .result-icon {
          font-size: 2rem;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .result-card.exists .result-icon {
          background: rgba(161, 255, 117, 0.2);
          color: var(--vtru-green);
        }
        .result-card.not-found .result-icon {
          background: rgba(245, 158, 11, 0.2);
          color: #f59e0b;
        }
        .result-text {
          flex: 1;
        }
        .result-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
        }
        .result-details {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.875rem;
        }
        .result-meta {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
        }
        .tx-link {
          color: var(--vtru-green);
          text-decoration: none;
          font-size: 0.875rem;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }
        .tx-link:hover {
          text-decoration: underline;
          color: #c5ff9e;
        }
        .result-placeholder {
          background: var(--vtru-dark-3);
          border-radius: 12px;
          padding: 3rem;
          text-align: center;
          margin-bottom: 1rem;
        }
        .info-box {
          background: var(--vtru-dark-3);
          border-radius: 12px;
          padding: 1.25rem;
          border-left: 3px solid var(--vtru-green);
        }
        .font-monospace {
          font-family: var(--bs-font-monospace);
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
}
