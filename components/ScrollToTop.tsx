'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Yukarı çık"
      className="fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 text-white shadow-lg transition-all duration-300 hover:bg-gold-600 hover:scale-110 hover:shadow-xl"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
