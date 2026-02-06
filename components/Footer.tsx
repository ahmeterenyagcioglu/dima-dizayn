'use client';

import Link from 'next/link';
import { Instagram, Youtube, Facebook } from 'lucide-react';

/* TikTok ikonu - Lucide'da yok, inline SVG */
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/dimadzyn', icon: Instagram },
  { name: 'TikTok', href: 'https://www.tiktok.com/@dimadizayn', icon: TikTokIcon },
  { name: 'YouTube', href: 'https://www.youtube.com/@dimadizayn', icon: Youtube },
  { name: 'Facebook', href: 'https://www.facebook.com/dimadizaynn', icon: Facebook },
];

const PHONE = '0535 367 99 31';
const PHONE_TEL = '+905353679931';

export default function Footer() {
  return (
    <footer className="border-t border-gold-200/40 bg-white">
      {/* Sosyal medya bölümü */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center sm:gap-10">
          <div>
            <p className="font-serif text-lg font-semibold text-gray-800">
              Dima Dizayn & Organizasyon
            </p>
            <p className="mt-1 text-sm text-dima-grey">
              Bizi sosyal medyada takip edin
            </p>
          </div>

          <ul className="flex items-center justify-center gap-6">
            {socialLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-200/60 bg-dima-cream text-dima-grey transition-all duration-300 hover:border-gold-400 hover:bg-gold-50 hover:text-gold-600"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Adres & İletişim */}
      <div className="border-t border-gold-200/30 bg-dima-cream/60">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gold-600">
                Adres
              </p>
              <a
                href="https://maps.app.goo.gl/fgZw6DHVeDsscXWz5"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-gray-600 transition-colors hover:text-gold-600 hover:underline"
              >
                Ertuğrul Mah., İsmet İnönü Cd., No:36, 35700, Bergama/İzmir
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gold-600">
                İletişim
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-1 inline-block text-sm font-medium text-gray-700 transition-colors hover:text-gold-600"
              >
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Alt çizgi / telif */}
      <div className="border-t border-gold-200/20 py-4">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-1">
            <p className="text-xs text-dima-grey-light">
              © {new Date().getFullYear()} Dima Dizayn & Organizasyon. Tüm hakları saklıdır.
            </p>
            <p className="text-xs text-dima-grey-light/60 font-mono">
              v2026.02.06.5
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
