'use client';

import { useState } from 'react';
import { PSC_ADDRESSES } from '../../lib/psc-constants';

export function RngExample() {
  const [seed, setSeed] = useState('0x01');

  const solidityCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GameWithRNG {
    address constant RNG = ${PSC_ADDRESSES.RNG};

    function rollDice() public view returns (uint256) {
        // Use nonce or unique identifier as seed
        (, bytes memory result) = RNG.staticcall(
            abi.encode(block.number)
        );

        uint256 random = abi.decode(result, (uint256));
        return (random % 6) + 1; // 1-6
    }

    function selectWinner(address[] calldata participants) public view returns (address) {
        (, bytes memory result) = RNG.staticcall(
            abi.encode(keccak256(abi.encodePacked(participants)))
        );

        uint256 random = abi.decode(result, (uint256));
        return participants[random % participants.length];
    }

    function generateTraits(uint256 tokenId) public view returns (uint8[5] memory traits) {
        for (uint i = 0; i < 5; i++) {
            // Different seed per trait
            (, bytes memory result) = RNG.staticcall(
                abi.encode(tokenId, i)
            );
            traits[i] = uint8(uint256(abi.decode(result, (bytes32))) % 100);
        }
    }
}`;

  return (
    <div className="border-top border-secondary pt-5 mt-5">
      <h3 className="text-white mb-4">Try It: Generate Random Numbers</h3>

      <div className="card card-dark p-4 rounded-3 mb-4">
        <div className="mb-3">
          <label className="form-label text-white">Seed (bytes)</label>
          <input
            type="text"
            className="form-control bg-dark text-white border-secondary"
            value={seed}
            onChange={(e) => setSeed(e.target.value)}
            placeholder="0x..."
          />
          <small className="text-muted">Optional seed for additional entropy (can be any bytes)</small>
        </div>
      </div>

      <div className="mb-4">
        <div className="code-block">
          <pre>{solidityCode}</pre>
        </div>
      </div>

      <div className="card card-dark p-4 rounded-3">
        <h4 className="text-vtru-green mb-3">Usage Patterns</h4>
        <ul className="text-muted-light mb-4">
          <li className="mb-2"><strong className="text-white">Dice Roll:</strong> <code className="text-vtru-green">random % 6 + 1</code></li>
          <li className="mb-2"><strong className="text-white">Percentage Check:</strong> <code className="text-vtru-green">random % 100 &lt; 25</code> (25% chance)</li>
          <li className="mb-2"><strong className="text-white">Array Selection:</strong> <code className="text-vtru-green">array[random % array.length]</code></li>
          <li className="mb-2"><strong className="text-white">Multiple Values:</strong> Use different seeds in same tx for multiple randoms</li>
        </ul>

        <h4 className="text-vtru-green mb-3">Anti-Grinding</h4>
        <p className="text-muted-light mb-0">
          The precompile performs 100 rounds of Keccak256 mixing. This makes it computationally
          expensive to grind for favorable outcomes off-chain while remaining cheap on-chain.
        </p>
      </div>
    </div>
  );
}
