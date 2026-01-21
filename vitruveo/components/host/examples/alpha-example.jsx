'use client';

import { getExampleBySlug } from './index';

export function AlphaExample() {
  const example = getExampleBySlug('alpha');

  return (
    <>
      <div className="mb-4">
        <h1 className="display-5 fw-bold text-white mb-2">{example.title}</h1>
        <p className="text-muted-light mb-0">{example.description}</p>
      </div>

      <div style={{ height: '600px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }} />
    </>
  );
}
