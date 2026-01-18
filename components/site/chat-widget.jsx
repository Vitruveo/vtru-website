'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function ChatWidget() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const encoded = encodeURIComponent(input.trim());
      router.push(`/chat?q=${encoded}`);
    }
  };

  return (
    <div className="chat-widget">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Vitruveo AI..."
            className="form-control"
          />
          <button type="submit" className="btn" aria-label="Send">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
