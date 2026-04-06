'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function YeniKonseptBanner() {
  const [fotolar, setFotolar] = useState<number[]>([3, 6]);

  useEffect(() => {
    const tumFotolar = [1, 2, 3, 4, 5, 6, 7, 8];
    const karisik = [...tumFotolar].sort(() => Math.random() - 0.5);
    setFotolar(karisik.slice(0, 2));
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-950 py-10 sm:py-14">
      {/* Arka plan parıltısı */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-gold-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Sol: Metin */}
          <div className="flex-1 text-center sm:text-left">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              Yeni
            </span>
            <h2 className="mt-1 font-serif text-2xl font-semibold text-white sm:text-3xl">
              Yeni Konseptlerimizi<br className="hidden sm:block" /> Keşfedin
            </h2>
            <p className="mt-3 max-w-sm text-sm text-gray-400">
              En taze tasarımlarımız galeride sizi bekliyor.
            </p>
            <Link
              href="/galeri#yeni-konseptler"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-gold-500/30 transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5"
            >
              Yeni konseptleri gör
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Sağ: 2 fotoğraf */}
          <div className="flex gap-3 sm:gap-4">
            {fotolar.map((id, i) => (
              <Link
                key={id}
                href="/galeri#yeni-konseptler"
                className="group relative h-32 w-44 overflow-hidden rounded-xl sm:h-40 sm:w-56"
                style={{ rotate: i === 0 ? '-2deg' : '2deg' }}
              >
                <Image
                  src={`/gallery/yeni-konseptler/${id}.webp`}
                  alt="Yeni Konsept - Dima Dizayn"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 44vw, 224px"
                />
                <div className="absolute inset-0 ring-1 ring-white/10 rounded-xl" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
