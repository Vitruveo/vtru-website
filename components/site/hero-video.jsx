'use client';

import { useState, useEffect } from 'react';

export function HeroVideo() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <video autoPlay muted loop playsInline className="video-bg">
      <source src="/videos/herovideo.mp4" type="video/mp4" />
    </video>
  );
}
