'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const KONSEPT_IMAGE_COUNT = 6;
const HIZMET_IMAGE_COUNT = 3;

const KONSEPTLER = [
  { slug: 'kina', title: 'Kına' },
  { slug: 'nisan', title: 'Nişan' },
  { slug: 'dugun-nikah', title: 'Düğün & Nikah' },
  { slug: 'sunnet', title: 'Sünnet' },
  { slug: 'dogum-gunu', title: 'Doğum Günü' },
] as const;

const HIZMETLER = [
  { slug: 'fotograf-video', title: 'Fotoğraf & Video' },
  { slug: 'muzik', title: 'Müzik' },
  { slug: 'isiklandirma', title: 'Işıklandırma' },
] as const;

// Tüm resimleri tek bir dizide topla
const ALL_IMAGES = [
  ...KONSEPTLER.flatMap(({ slug }) => 
    Array.from({ length: KONSEPT_IMAGE_COUNT }, (_, i) => ({ slug, id: i + 1 }))
  ),
  ...HIZMETLER.flatMap(({ slug }) => 
    Array.from({ length: HIZMET_IMAGE_COUNT }, (_, i) => ({ slug, id: i + 1 }))
  ),
];

type SelectedImage = { slug: string; id: number } | null;

function getImageUrl(slug: string, id: number) {
  return `/gallery/${slug}/${id}.webp`;
}

export default function GaleriPage() {
  const [selected, setSelected] = useState<SelectedImage>(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [direction, setDirection] = useState(0); // -1 için soldan sağa, 1 için sağdan sola

  const navigateImage = (direction: number) => {
    if (selected === null) return;
    
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < ALL_IMAGES.length) {
      setDirection(direction);
      setCurrentIndex(newIndex);
      setSelected(ALL_IMAGES[newIndex]);
    }
  };

  const openModal = (slug: string, id: number) => {
    const index = ALL_IMAGES.findIndex(img => img.slug === slug && img.id === id);
    if (index !== -1) {
      setDirection(0); // İlk açılış için yön belirtilmemiş
      setCurrentIndex(index);
      setSelected({ slug, id });
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (selected === null) return;
      
      if (e.key === 'ArrowLeft') {
        navigateImage(-1);
      } else if (e.key === 'ArrowRight') {
        navigateImage(1);
      }
    };

    window.addEventListener('keydown', handleEscape);
    window.addEventListener('keydown', handleArrowKeys);
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('keydown', handleArrowKeys);
    };
  }, [selected, currentIndex]);

  const renderGrid = (slug: string, title: string, count: number) => (
    <div key={slug} className="mt-12 first:mt-0 sm:mt-14 md:mt-16">
      <h2 className="font-serif text-lg font-semibold text-gray-800 sm:text-xl md:text-2xl border-b border-gold-200/50 pb-2">
        {title}
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3 sm:mt-5 md:grid-cols-3 md:gap-4 lg:gap-5">
        {Array.from({ length: count }, (_, i) => i + 1).map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => openModal(slug, id)}
            className="group relative aspect-[4/3] min-h-[100px] overflow-hidden rounded-lg border border-gold-200/40 bg-gray-200 shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 active:scale-[0.98] sm:min-h-0 sm:rounded-xl sm:shadow-md"
            aria-label={`${title} görseli ${id} - büyütmek için tıklayın`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-105"
              style={{ backgroundImage: `url('${getImageUrl(slug, id)}')` }}
            />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-dima-cream/50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-14 md:px-6 md:py-16 lg:px-8">
        <h1 className="font-serif text-2xl font-semibold text-gray-800 text-center sm:text-3xl md:text-4xl">
          Galeri
        </h1>
        <p className="mt-2 text-center text-sm text-dima-grey max-w-2xl mx-auto sm:mt-3 sm:text-base">
          Konsept ve hizmetlerimize göre kategorize edilmiş kareler. Büyütmek için tıklayın.
        </p>

        {/* Konseptler - 6 fotoğraf */}
        <section className="mt-8 sm:mt-10 md:mt-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gold-600 mb-1 sm:mb-2">
            Konseptler
          </p>
          {KONSEPTLER.map(({ slug, title }) => renderGrid(slug, title, KONSEPT_IMAGE_COUNT))}
        </section>

        {/* Fotoğraf-Video, Müzik, Işıklandırma - 3'er fotoğraf */}
        <section className="mt-10 pt-8 border-t border-gold-200/30 sm:mt-14 sm:pt-10 md:mt-16 md:pt-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gold-600 mb-1 sm:mb-2">
            Hizmetler
          </p>
          {HIZMETLER.map(({ slug, title }) => renderGrid(slug, title, HIZMET_IMAGE_COUNT))}
        </section>
      </div>

      {/* Lightbox - gelişmiş modal */}
      <AnimatePresence mode="wait">
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-4"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Büyütülmüş galeri görseli"
          >
            {/* Kapat butonu */}
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 z-10 rounded-full p-2.5 text-white/90 transition-colors hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-4 sm:top-4"
              aria-label="Kapat"
            >
              <X className="h-7 w-7 sm:h-8 sm:w-8" />
            </button>

            {/* Geri ok */}
            {currentIndex > 0 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(-1);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full p-2.5 text-white/90 transition-colors hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 sm:left-4"
                aria-label="Önceki resim"
              >
                <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10" />
              </button>
            )}

            {/* İleri ok */}
            {currentIndex < ALL_IMAGES.length - 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(1);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full p-2.5 text-white/90 transition-colors hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-4"
                aria-label="Sonraki resim"
              >
                <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10" />
              </button>
            )}

            {/* Resim container - Yön duyarlı animasyon */}
            <motion.div
              key={`${selected.slug}-${selected.id}`}
              initial={{ 
                opacity: 0, 
                scale: 0.9,
                x: direction === 0 ? 0 : direction * 100 // Yöne göre başlangıç pozisyonu
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: 0
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.9,
                x: 0 // Kapatmada her zaman merkezden kapanır
              }}
              transition={{ 
                duration: 0.35,
                ease: [0.25, 0.1, 0.25, 1.0] // Smooth easing
              }}
              className="relative flex items-center justify-center h-[85vh] w-full max-w-[90vw] rounded-lg shadow-2xl sm:h-[88vh] sm:max-w-[90vw] sm:rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getImageUrl(selected.slug, selected.id)}
                alt="Galeri görseli"
                className="max-w-[90vw] max-h-[85vh] object-contain"
                style={{ aspectRatio: 'auto' }}
                draggable={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
