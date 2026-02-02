'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-200/30 bg-dima-cream/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / Marka */}
        <Link
          href="/"
          className="group flex items-center gap-3 font-serif text-xl font-semibold tracking-tight text-gray-800 transition-colors hover:text-gold-600 sm:text-2xl"
        >
          <Image
            src="/logo.svg"
            alt="Dima Dizayn & Organizasyon"
            width={120}
            height={40}
            className="h-8 w-auto sm:h-10"
            priority
          />
          <span className="hidden sm:inline">Dima Dizayn</span>
          <span className="hidden sm:inline font-normal text-gold-600">&</span>
          <span className="hidden sm:inline">Organizasyon</span>
        </Link>

        {/* Masaüstü menü */}
        <ul className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="link-gold text-sm font-medium text-gray-700 transition-colors hover:text-gold-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
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
            className="overflow-hidden border-t border-gold-200/30 bg-dima-cream md:hidden"
          >
            <ul className="flex flex-col gap-0 px-4 py-4">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gold-50 hover:text-gold-600"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
