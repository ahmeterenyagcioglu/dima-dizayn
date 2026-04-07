'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'dima-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => { localStorage.setItem(STORAGE_KEY, 'accepted'); setVisible(false); };
  const decline = () => { localStorage.setItem(STORAGE_KEY, 'declined'); setVisible(false); };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 mx-auto max-w-lg animate-fade-in sm:bottom-6">
      <div className="rounded-2xl border border-gold-200/50 bg-white/95 p-5 shadow-2xl backdrop-blur-md">
        {/* Üst kısım */}
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gold-100">
            <Cookie className="h-4 w-4 text-gold-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800">Çerez Bildirimi</p>
            <p className="mt-1 text-xs leading-relaxed text-gray-500">
              Siteyi daha iyi sunmak için temel çerezler kullanıyoruz.{' '}
              <Link href="/kvkk" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
                Gizlilik Politikası
              </Link>
            </p>
          </div>
        </div>

        {/* Butonlar */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={decline}
            className="flex-1 rounded-full border border-gray-200 py-2 text-xs font-medium text-gray-500 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            Reddet
          </button>
          <button
            onClick={accept}
            className="flex-1 rounded-full bg-gold-500 py-2 text-xs font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-md"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
