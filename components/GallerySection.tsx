'use client';

import Link from 'next/link';

const GALLERY_IDS = [1, 2, 3, 4, 5, 6];

export default function GallerySection() {
  return (
    <section id="galeri" className="border-t border-gold-200/30 bg-dima-cream/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-semibold text-gray-800 sm:text-3xl text-center">
          Mutlu Anlardan Kareler
        </h2>
        <p className="mt-3 text-center text-sm text-dima-grey max-w-2xl mx-auto">
          Organizasyonlarımızdan seçme anlar. Galeri sayfasına gitmek için tıklayın.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-5">
          {GALLERY_IDS.map((i) => (
            <Link
              key={i}
              href="/galeri"
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-gold-200/40 bg-gray-200 shadow-md block focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
              aria-label={`Galeri görseli ${i} - Galeri sayfasına git`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('/gallery/${i}.jpg')` }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
