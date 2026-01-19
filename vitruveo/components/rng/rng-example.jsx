'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PSC_ADDRESSES, NETWORK_CONFIG } from '../../lib/psc-constants';

// Generate a color based on the number
function getColorForNumber(num, min, max) {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
    '#F8B500', '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9',
    '#92A8D1', '#955251', '#B565A7', '#009B77', '#DD4124'
  ];
  // Use the number to pick a color
  return colors[Math.abs(num) % colors.length];
}


export function RngExample() {
  const [activeTab, setActiveTab] = useState('demo');
  const [minVal, setMinVal] = useState('1');
  const [maxVal, setMaxVal] = useState('100');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    const min = parseInt(minVal, 10);
    const max = parseInt(maxVal, 10);

    if (isNaN(min) || isNaN(max) || min >= max) {
      setError('Invalid range. Min must be less than max.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(NETWORK_CONFIG.rpc, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'eth_call',
          params: [{
            to: PSC_ADDRESSES.RNG,
            data: '0x'
          }, 'latest']
        })
      });

      const json = await response.json();

      if (json.error) {
        throw new Error(json.error.message);
      }

      // Convert bytes32 to BigInt, then to number in range
      const randomBigInt = BigInt(json.result);
      const range = BigInt(max - min + 1);
      const randomInRange = Number(randomBigInt % range) + min;

      setResults(prev => [{
        value: randomInRange,
        raw: json.result,
        timestamp: Date.now()
      }, ...prev]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const codeSnippet = `// Generate random number in range using Vitruveo RNG PSC
const RPC = '${NETWORK_CONFIG.rpc}';
const RNG_ADDRESS = '${PSC_ADDRESSES.RNG}';

// Call the RNG precompile
const response = await fetch(RPC, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_call',
    params: [{ to: RNG_ADDRESS, data: '0x' }, 'latest']
  })
});

const { result } = await response.json();

// Convert bytes32 to number in range [min, max]
const randomBigInt = BigInt(result);
const range = BigInt(max - min + 1);
const randomNumber = Number(randomBigInt % range) + min;

console.log(randomNumber); // e.g., 42`;

  const soliditySnippet = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RandomNumbers {
    address constant RNG_PSC = ${PSC_ADDRESSES.RNG};

    /// @notice Generate a random number in a range
    /// @param min Minimum value (inclusive)
    /// @param max Maximum value (inclusive)
    /// @param salt Additional entropy
    function getRandomInRange(uint256 min, uint256 max, bytes memory salt)
        public
        view
        returns (uint256)
    {
        require(max > min, "Invalid range");

        (bool success, bytes memory result) = RNG_PSC.staticcall(salt);
        require(success, "RNG failed");

        uint256 random = abi.decode(result, (uint256));
        return (random % (max - min + 1)) + min;
    }

    /// @notice Roll a dice (1-6)
    function rollDice() public view returns (uint256) {
        return getRandomInRange(1, 6, abi.encodePacked(block.prevrandao));
    }

    /// @notice Flip a coin (0 = heads, 1 = tails)
    function flipCoin() public view returns (uint256) {
        return getRandomInRange(0, 1, abi.encodePacked(block.number));
    }

    /// @notice Select random index from array
    function randomIndex(uint256 arrayLength, bytes memory salt)
        public
        view
        returns (uint256)
    {
        return getRandomInRange(0, arrayLength - 1, salt);
    }
}`;

  return (
    <div className="border-top border-secondary pt-5 mt-5">
      <h3 className="text-white mb-4">Try It: Generate Random Numbers</h3>

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
          <div className="d-flex gap-3 align-items-end mb-4 flex-wrap">
            <div>
              <label className="form-label text-white small">Min</label>
              <input
                type="number"
                className="form-control bg-dark text-white border-secondary"
                value={minVal}
                onChange={(e) => setMinVal(e.target.value)}
                style={{ width: '100px' }}
              />
            </div>
            <div>
              <label className="form-label text-white small">Max</label>
              <input
                type="number"
                className="form-control bg-dark text-white border-secondary"
                value={maxVal}
                onChange={(e) => setMaxVal(e.target.value)}
                style={{ width: '100px' }}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={handleGenerate}
              disabled={loading}
            >
              {loading ? 'Generating...' : 'Go'}
            </button>
          </div>

          {error && (
            <div className="alert alert-danger">{error}</div>
          )}

          <div className="tile-grid">
            {results.map((r, idx) => (
              <div
                key={r.timestamp}
                className="number-tile"
                style={{ backgroundColor: getColorForNumber(r.value, parseInt(minVal), parseInt(maxVal)) }}
                title={`Raw: ${r.raw}`}
              >
                {r.value}
              </div>
            ))}
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
        .tile-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          min-height: 200px;
          margin-bottom: 3rem;
        }
        .number-tile {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #000;
          border-radius: 8px;
        }
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
      `}</style>
    </div>
  );
}
