'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import questions from '@/lib/questions.json';

const allQuestions = [...questions.blockchain, ...questions.website];

export function HeroChat() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isFocused) return; // Don't rotate when user is typing

    const interval = setInterval(() => {
      setCurrentQuestion((prev) => {
        // Random next question, different from current
        let next;
        do {
          next = Math.floor(Math.random() * allQuestions.length);
        } while (next === prev && allQuestions.length > 1);
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isFocused]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputValue.trim() || allQuestions[currentQuestion];
    router.push(`/chat?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="hero-chat">
      <div className="hero-chat-label">Ask Vitruveo AI</div>
      <form onSubmit={handleSubmit} className="hero-chat-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={allQuestions[currentQuestion]}
          className="hero-chat-input"
        />
        <button type="submit" className="hero-chat-submit">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </form>
    </div>
  );
}
