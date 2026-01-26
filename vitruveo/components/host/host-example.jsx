'use client';

import { useState } from 'react';
import { HOST_REGISTRY_ADDRESS, PSC_ADDRESSES } from '../../lib/psc-constants';

export function HostExample() {
  const [webhookUrl, setWebhookUrl] = useState('https://api.example.com/webhook');
  const [payload, setPayload] = useState('{"action":"fulfill","orderId":"123"}');
  const [validatorAddress, setValidatorAddress] = useState('0x...');
  const [activeTab, setActiveTab] = useState('solidity');

  const solidityCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IHostRegistry {
    function createRequest(
        address validator,
        string calldata url,
        string calldata payload,
        string calldata headers
    ) external returns (uint256 requestId);
}

contract MyContract {
    IHostRegistry constant HOST = IHostRegistry(${HOST_REGISTRY_ADDRESS});

    function triggerWebhook() external returns (uint256) {
        return HOST.createRequest(
            ${validatorAddress},
            "${webhookUrl}",
            '${payload}',
            "Content-Type: application/json"
        );
    }
}`;

  const javascriptCode = `// Using ethers.js
const hostRegistryABI = [
  "function createRequest(address validator, string url, string payload, string headers) returns (uint256)"
];

const hostRegistry = new ethers.Contract(
  "${HOST_REGISTRY_ADDRESS}",
  hostRegistryABI,
  signer
);

const tx = await hostRegistry.createRequest(
  "${validatorAddress}",
  "${webhookUrl}",
  '${payload}',
  "Content-Type: application/json"
);

const receipt = await tx.wait();
console.log("Request ID:", receipt.events[0].args.requestId);`;

  return (
    <div className="mb-5">
      <div className="card card-dark p-4 rounded-3 mb-4">
        <div className="mb-3">
          <label className="form-label text-white">Validator Address</label>
          <input
            type="text"
            className="form-control bg-dark text-white border-secondary"
            value={validatorAddress}
            onChange={(e) => setValidatorAddress(e.target.value)}
            placeholder="0x..."
          />
          <small className="text-muted">The validator that will execute this request</small>
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Webhook URL</label>
          <input
            type="text"
            className="form-control bg-dark text-white border-secondary"
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            placeholder="https://your-api.com/webhook"
          />
          <small className="text-muted">Your endpoint that receives the POST request</small>
        </div>

        <div className="mb-0">
          <label className="form-label text-white">JSON Payload</label>
          <textarea
            className="form-control bg-dark text-white border-secondary"
            value={payload}
            onChange={(e) => setPayload(e.target.value)}
            rows={3}
            placeholder='{"key": "value"}'
          />
          <small className="text-muted">Data sent to your webhook (use | prefix to encrypt sensitive values)</small>
        </div>
      </div>

      <div className="mb-4">
        <ul className="nav nav-tabs border-secondary">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'solidity' ? 'active bg-dark text-vtru-green border-secondary' : 'text-muted'}`}
              onClick={() => setActiveTab('solidity')}
            >
              Solidity
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'javascript' ? 'active bg-dark text-vtru-green border-secondary' : 'text-muted'}`}
              onClick={() => setActiveTab('javascript')}
            >
              JavaScript
            </button>
          </li>
        </ul>
        <div className="code-block rounded-top-0">
          <pre>{activeTab === 'solidity' ? solidityCode : javascriptCode}</pre>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card card-dark p-4 rounded-3 h-100">
            <h5 className="text-vtru-green mb-3">What Happens</h5>
            <ol className="text-muted-light small ps-3 mb-0">
              <li className="mb-2">Your contract calls <code className="text-vtru-green">createRequest()</code> on the HOST Registry</li>
              <li className="mb-2">The transaction includes validator address, URL, payload, and headers</li>
              <li className="mb-2">During block execution, the selected validator fires an HTTP POST to your URL</li>
              <li className="mb-2">Your webhook receives the request with <code className="text-vtru-green">X-Chain-Request-ID</code> header</li>
              <li className="mb-0">Process the request and respond (standard webhook flow)</li>
            </ol>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-dark p-4 rounded-3 h-100">
            <h5 className="text-vtru-green mb-3">Built-in Encryption</h5>
            <p className="text-muted-light small mb-0">
              HOST supports <strong className="text-white">ECDH + AES-256-GCM encryption</strong> for sensitive values.
              Prefix encrypted values with <code className="text-vtru-green">|</code> and only the designated
              validator can decrypt them when executing the webhook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
