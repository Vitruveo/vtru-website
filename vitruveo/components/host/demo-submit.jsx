'use client';

import { useState, useEffect, useCallback } from 'react';
import { ethers } from 'ethers';
import { useAccount, useWalletClient } from 'wagmi';
import * as secp from '@noble/secp256k1';

// Config
const RPC_URL = "https://rpc.vitruveo.ai";
const HOST_DEMO_ADDRESS = "0x89eB150D576f02Dc18858227aD36aD5D9111739C";

const HOST_DEMO_ABI = [
  "function makeDemoRequest(address validator, string calldata url, string calldata headerInput, string[] calldata headerValues, string calldata bodyInput, string[] calldata bodyValues) external"
];

const DEFAULT_VALIDATOR = {
  address: '0x54Db0a8A3078C16cB4Ca6E289a68c23Ef3b127d0',
  pubKey: '04fd404a459b20b80650c4731ed4c86f1686a77df729042dbe386d122916c2a6f0cc20f3e0317ad4bfe39fb17281cbfacd96d7b8febd0eeae3b41d3054c354c50e',
  name: 'AppVinci'
};

// Encryption helper
async function encryptValue(pubKeyHex, plainText) {
  pubKeyHex = pubKeyHex.replace(/^0x/, '');
  const ephemeralPriv = secp.utils.randomPrivateKey();
  const ephemeralPub = secp.getPublicKey(ephemeralPriv, false);
  const sharedPoint = secp.getSharedSecret(ephemeralPriv, pubKeyHex, false);
  const sharedX = sharedPoint.slice(1, 33);

  const aesKey = await window.crypto.subtle.importKey("raw", sharedX, { name: "AES-GCM" }, false, ["encrypt"]);
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const enc = new TextEncoder();
  const ciphertextBuffer = await window.crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, aesKey, enc.encode(plainText));

  const combined = new Uint8Array(ephemeralPub.length + iv.length + ciphertextBuffer.byteLength);
  combined.set(ephemeralPub, 0);
  combined.set(iv, ephemeralPub.length);
  combined.set(new Uint8Array(ciphertextBuffer), ephemeralPub.length + iv.length);
  return "|" + secp.utils.bytesToHex(combined);
}

/**
 * Build a payload for HOST demo request
 * @param {Object} options
 * @param {string} options.url - The webhook URL
 * @param {Object} options.headers - Key-value pairs for headers (values will be encrypted)
 * @param {Object} options.body - Key-value pairs for body (values will be encrypted)
 * @param {string} options.bodyTemplate - Template name to use instead of body object
 * @param {string[]} options.bodyValues - Values for template placeholders (will be encrypted)
 * @param {string} options.headerTemplate - Template name to use instead of headers object
 * @param {string[]} options.headerValues - Values for template placeholders (will be encrypted)
 * @param {Object} options.validator - Validator info (defaults to AppVinci)
 */
export async function buildPayload({
  url,
  headers = {},
  body = {},
  bodyTemplate,
  bodyValues = [],
  headerTemplate,
  headerValues = [],
  validator = DEFAULT_VALIDATOR
}) {
  const pubKey = validator.pubKey;

  // Process headers
  let headerInput, headerVals;
  if (headerTemplate) {
    headerInput = headerTemplate;
    headerVals = await Promise.all(headerValues.map(v => encryptValue(pubKey, v)));
  } else {
    const headerObj = {};
    headerVals = [];
    const entries = Object.entries(headers);
    for (let i = 0; i < entries.length; i++) {
      const [key, val] = entries[i];
      headerObj[key] = `$${i + 1}`;
      headerVals.push(await encryptValue(pubKey, val));
    }
    headerInput = JSON.stringify(headerObj);
  }

  // Process body
  let bodyInput, bodyVals;
  if (bodyTemplate) {
    bodyInput = bodyTemplate;
    bodyVals = await Promise.all(bodyValues.map(v => encryptValue(pubKey, v)));
  } else {
    const bodyObj = {};
    bodyVals = [];
    const entries = Object.entries(body);
    for (let i = 0; i < entries.length; i++) {
      const [key, val] = entries[i];
      bodyObj[key] = `$${i + 1}`;
      bodyVals.push(await encryptValue(pubKey, val));
    }
    bodyInput = JSON.stringify(bodyObj);
  }

  return {
    validator: validator.address,
    url,
    headerInput,
    headerValues: headerVals,
    bodyInput,
    bodyValues: bodyVals
  };
}

/**
 * Hook for HOST demo submission
 */
export function useHostDemo() {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();

  const [isHydrating, setIsHydrating] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [txStatus, setTxStatus] = useState(null);
  const [txHash, setTxHash] = useState(null);

  // Auto-hydrate when wallet connects
  useEffect(() => {
    if (isConnected && address && !isHydrated && !isHydrating) {
      hydrate();
    }
  }, [isConnected, address]);

  const hydrate = useCallback(async () => {
    if (!address || isHydrating) return;

    setIsHydrating(true);
    try {
      const res = await fetch('/api/hydrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address })
      });
      const data = await res.json();
      if (data.success) {
        setIsHydrated(true);
      }
    } catch (err) {
      console.error('Hydration failed:', err);
    } finally {
      setIsHydrating(false);
    }
  }, [address, isHydrating]);

  const submit = useCallback(async (payload) => {
    if (!isConnected || !walletClient || !payload) {
      setTxStatus({ type: 'danger', message: 'Please connect your wallet first.' });
      return null;
    }

    setIsSubmitting(true);
    setTxStatus({ type: 'info', message: 'Preparing transaction...' });
    setTxHash(null);

    try {
      const provider = new ethers.BrowserProvider(walletClient);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(HOST_DEMO_ADDRESS, HOST_DEMO_ABI, signer);

      setTxStatus({ type: 'warning', message: 'Please confirm in your wallet...' });

      const tx = await contract.makeDemoRequest(
        payload.validator,
        payload.url,
        payload.headerInput,
        payload.headerValues,
        payload.bodyInput,
        payload.bodyValues
      );

      setTxStatus({ type: 'info', message: 'Transaction sent! Waiting for confirmation...' });

      const receipt = await tx.wait();
      setTxHash(tx.hash);
      setTxStatus({ type: 'success', message: 'Transaction confirmed!' });

      return { hash: tx.hash, receipt };
    } catch (err) {
      console.error('Transaction failed:', err);
      setTxStatus({ type: 'danger', message: `Failed: ${err.message}` });
      return null;
    } finally {
      setIsSubmitting(false);
    }
  }, [isConnected, walletClient]);

  const reset = useCallback(() => {
    setTxStatus(null);
    setTxHash(null);
  }, []);

  return {
    isConnected,
    address,
    isHydrating,
    isHydrated,
    isSubmitting,
    txStatus,
    txHash,
    hydrate,
    submit,
    reset,
    buildPayload
  };
}

/**
 * Status display component
 */
export function HostDemoStatus({ status, txHash }) {
  if (!status) return null;

  return (
    <div className={`alert alert-${status.type} mt-3`}>
      {txHash ? (
        <div className="text-center">
          <p className="mb-2">{status.message}</p>
          <a
            href={`https://explorer.vitruveo.ai/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ wordBreak: 'break-all', color: '#000', textDecoration: 'underline' }}
          >
            View on Explorer →
          </a>
        </div>
      ) : (
        status.message
      )}
    </div>
  );
}

/**
 * Submit button component
 */
export function HostDemoButton({
  onClick,
  isSubmitting,
  isConnected,
  disabled,
  children = 'Send Request'
}) {
  return (
    <button
      className="btn btn-primary btn-lg"
      onClick={onClick}
      disabled={disabled || isSubmitting || !isConnected}
    >
      {isSubmitting ? (
        <>
          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  );
}
