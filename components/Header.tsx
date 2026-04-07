/**
 * components/Header.tsx — Sticky Üst Navigasyon
 *
 * - Sayfa kaydırılsa da her zaman ekranın üstünde kalır (sticky, z-50)
 * - Aktif sayfayı usePathname ile tespit eder ve link altına gold çizgi çizer
 * - Masaüstü: yatay link listesi
 * - Mobil: hamburger butonu → Framer Motion ile animasyonlu açılır menü
 */
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

/* Navigasyon linkleri — sıra ve etiket değişikliği için burası güncellenir */
const menuItems = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hizmetlerimiz', label: 'Hizmetlerimiz' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/sss', label: 'S.S.S.' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold/20 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / Marka */}
        <Link
          href="/"
          className="group flex items-center gap-2 sm:gap-3 font-serif text-xl font-semibold tracking-tight text-gray-800 transition-colors hover:text-gold-600 sm:text-2xl whitespace-nowrap"
        >
          <Image
            src="/gallery/assets/logo.webp"
            alt="Dima Dizayn & Organizasyon"
            width={120}
            height={40}
            className="h-8 w-auto sm:h-10"
            priority
          />
          <div className="flex items-center whitespace-nowrap">
            <span className="text-[13px] font-medium sm:text-xl md:text-2xl">Dima Dizayn</span>
            <span className="text-[13px] font-medium sm:text-xl md:text-2xl font-normal text-amber-700 sm:mx-1">&</span>
            <span className="text-[13px] font-medium sm:text-xl md:text-2xl">Organizasyon</span>
          </div>
        </Link>

        {/* Masaüstü menü */}
        <ul className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors hover:text-gold-600 ${
                    isActive 
                      ? 'text-gold-600' 
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold-600"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobil menü butonu */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors hover:bg-gold-100 hover:text-gold-600 md:hidden"
          aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobil menü (açılır/kapanır) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-gold/20 bg-white/80 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-0 px-4 py-4">
              {menuItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-gold-50 hover:text-gold-600 ${
                        isActive 
                          ? 'text-gold-600 bg-gold-50' 
                          : 'text-gray-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
