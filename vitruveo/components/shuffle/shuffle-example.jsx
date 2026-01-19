'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PSC_ADDRESSES, NETWORK_CONFIG } from '../../lib/psc-constants';

// Parse 104-byte hex response into array of 52 card codes
function parseShuffleResponse(hexData) {
  // Remove 0x prefix if present
  const hex = hexData.startsWith('0x') ? hexData.slice(2) : hexData;
  const cards = [];

  // 104 bytes = 52 cards, each card is 2 ASCII chars (4 hex digits)
  for (let i = 0; i < hex.length; i += 4) {
    const suit = String.fromCharCode(parseInt(hex.slice(i, i + 2), 16));
    const rank = String.fromCharCode(parseInt(hex.slice(i + 2, i + 4), 16));
    cards.push(`${suit}${rank}`);
  }

  return cards;
}

// Generate a random salt
function generateSalt() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return '0x' + Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
}

export function ShuffleExample() {
  const [activeTab, setActiveTab] = useState('demo');
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleShuffle = async () => {
    setLoading(true);
    setError(null);

    try {
      const salt = generateSalt();

      const response = await fetch(NETWORK_CONFIG.rpc, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'eth_call',
          params: [{
            to: PSC_ADDRESSES.SHUFFLE,
            data: salt
          }, 'latest']
        })
      });

      const json = await response.json();

      if (json.error) {
        throw new Error(json.error.message);
      }

      const shuffledCards = parseShuffleResponse(json.result);
      setCards(shuffledCards);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const codeSnippet = `// Shuffle a 52-card deck using Vitruveo PSC
const RPC = '${NETWORK_CONFIG.rpc}';
const SHUFFLE_ADDRESS = '${PSC_ADDRESSES.SHUFFLE}';

// Generate random salt
const salt = '0x' + [...crypto.getRandomValues(new Uint8Array(32))]
  .map(b => b.toString(16).padStart(2, '0')).join('');

// Call the Shuffle precompile
const response = await fetch(RPC, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_call',
    params: [{ to: SHUFFLE_ADDRESS, data: salt }, 'latest']
  })
});

const { result } = await response.json();

// Parse 104 bytes into 52 cards (2 ASCII chars each)
const cards = [];
const hex = result.slice(2); // remove 0x
for (let i = 0; i < hex.length; i += 4) {
  const suit = String.fromCharCode(parseInt(hex.slice(i, i + 2), 16));
  const rank = String.fromCharCode(parseInt(hex.slice(i + 2, i + 4), 16));
  cards.push(suit + rank); // e.g., "SA", "H7", "CQ"
}

console.log(cards); // ["SA", "H7", "CQ", ...]`;

  const soliditySnippet = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CardGame {
    address constant SHUFFLE_PSC = ${PSC_ADDRESSES.SHUFFLE};

    /// @notice Get a shuffled 52-card deck
    /// @param salt Random bytes for shuffle entropy
    /// @return deck 104 bytes representing 52 cards (2 bytes each)
    function getShuffledDeck(bytes memory salt) public view returns (bytes memory deck) {
        (bool success, bytes memory result) = SHUFFLE_PSC.staticcall(salt);
        require(success, "Shuffle failed");
        return result;
    }

    /// @notice Deal cards to players
    /// @param numPlayers Number of players
    /// @param cardsPerPlayer Cards per player
    function dealCards(uint8 numPlayers, uint8 cardsPerPlayer)
        public
        view
        returns (bytes[] memory hands)
    {
        bytes memory deck = getShuffledDeck(abi.encodePacked(block.prevrandao));
        hands = new bytes[](numPlayers);

        for (uint8 p = 0; p < numPlayers; p++) {
            hands[p] = new bytes(cardsPerPlayer * 2);
            for (uint8 c = 0; c < cardsPerPlayer; c++) {
                uint256 idx = (p * cardsPerPlayer + c) * 2;
                hands[p][c * 2] = deck[idx];         // Suit
                hands[p][c * 2 + 1] = deck[idx + 1]; // Rank
            }
        }
    }
}`;

  return (
    <div className="border-top border-secondary pt-5 mt-5">
      <h3 className="text-white mb-4">Try It: Shuffle a Deck</h3>

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
          <button
            className="btn btn-primary mb-4"
            onClick={handleShuffle}
            disabled={loading}
          >
            {loading ? 'Shuffling...' : 'Shuffle Deck'}
          </button>

          {error && (
            <div className="alert alert-danger">{error}</div>
          )}

          {cards.length > 0 && (
            <div className="card-grid">
              {cards.map((card, idx) => (
                <div key={idx} className="playing-card">
                  <img
                    src={`/vitruveo/images/cards/${card}.svg`}
                    alt={card}
                    title={card}
                  />
                </div>
              ))}
            </div>
          )}
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
        .card-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .playing-card {
          width: 60px;
        }
        .playing-card img {
          width: 100%;
          height: auto;
          border-radius: 3px;
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
