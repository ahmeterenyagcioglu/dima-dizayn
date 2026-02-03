'use client';

import { useState, useEffect, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Tüm fotoğraflar - ham veri
const ALL_PHOTOS = [
  { slug: 'kina', id: 1 }, { slug: 'kina', id: 2 }, { slug: 'kina', id: 3 },
  { slug: 'kina', id: 4 }, { slug: 'kina', id: 5 }, { slug: 'kina', id: 6 }, { slug: 'kina', id: 7 }, { slug: 'kina', id: 8 }, { slug: 'kina', id: 9 },
  { slug: 'kina', id: 10 }, { slug: 'kina', id: 11 }, { slug: 'kina', id: 12 }, { slug: 'kina', id: 13 }, { slug: 'kina', id: 14 }, { slug: 'kina', id: 15 },
  { slug: 'kina', id: 16 }, { slug: 'kina', id: 17 }, { slug: 'kina', id: 18 },
  { slug: 'nisan', id: 1 }, { slug: 'nisan', id: 2 }, { slug: 'nisan', id: 3 },
  { slug: 'nisan', id: 4 }, { slug: 'nisan', id: 5 }, { slug: 'nisan', id: 6 },
  { slug: 'nisan', id: 7 }, { slug: 'nisan', id: 8 }, { slug: 'nisan', id: 9 },
  { slug: 'nisan', id: 10 }, { slug: 'nisan', id: 11 }, { slug: 'nisan', id: 12 },
  { slug: 'nisan', id: 13 }, { slug: 'nisan', id: 14 }, { slug: 'nisan', id: 15 },
  { slug: 'nisan', id: 16 }, { slug: 'nisan', id: 17 }, { slug: 'nisan', id: 18 },
  { slug: 'dugun-nikah', id: 1 }, { slug: 'dugun-nikah', id: 2 }, { slug: 'dugun-nikah', id: 3 },
  { slug: 'dugun-nikah', id: 4 }, { slug: 'dugun-nikah', id: 5 }, { slug: 'dugun-nikah', id: 6 },
  { slug: 'dugun-nikah', id: 7 }, { slug: 'dugun-nikah', id: 8 }, { slug: 'dugun-nikah', id: 9 },
  { slug: 'dugun-nikah', id: 10 }, { slug: 'dugun-nikah', id: 11 }, { slug: 'dugun-nikah', id: 12 },
  { slug: 'sunnet', id: 1 }, { slug: 'sunnet', id: 2 }, { slug: 'sunnet', id: 3 },
  { slug: 'sunnet', id: 4 }, { slug: 'sunnet', id: 5 }, { slug: 'sunnet', id: 6 },
  { slug: 'sunnet', id: 7 }, { slug: 'sunnet', id: 8 }, { slug: 'sunnet', id: 9 },
  { slug: 'sunnet', id: 10 }, { slug: 'sunnet', id: 11 }, { slug: 'sunnet', id: 12 },
  { slug: 'sunnet', id: 13 }, { slug: 'sunnet', id: 14 }, { slug: 'sunnet', id: 15 },
  { slug: 'sunnet', id: 16 }, { slug: 'sunnet', id: 17 },
  { slug: 'dogum-gunu', id: 1 }, { slug: 'dogum-gunu', id: 2 }, { slug: 'dogum-gunu', id: 3 },
  { slug: 'dogum-gunu', id: 4 }, { slug: 'dogum-gunu', id: 5 }, { slug: 'dogum-gunu', id: 6 },
  { slug: 'dogum-gunu', id: 7 }, { slug: 'dogum-gunu', id: 8 }, { slug: 'dogum-gunu', id: 9 },
  { slug: 'fotograf-video', id: 1 }, { slug: 'fotograf-video', id: 2 }, { slug: 'fotograf-video', id: 3 }, { slug: 'fotograf-video', id: 4 },
  { slug: 'muzik', id: 1 }, { slug: 'muzik', id: 2 }, { slug: 'muzik', id: 3 },
  { slug: 'muzik', id: 4 }, { slug: 'muzik', id: 5 }, { slug: 'muzik', id: 6 }, { slug: 'muzik', id: 7 }, { slug: 'muzik', id: 8 }, { slug: 'muzik', id: 9 },
  { slug: 'isiklandirma', id: 1 }, { slug: 'isiklandirma', id: 2 }, { slug: 'isiklandirma', id: 3 },
  { slug: 'isiklandirma', id: 4 }, { slug: 'isiklandirma', id: 5 }, { slug: 'isiklandirma', id: 6 }, { slug: 'isiklandirma', id: 7 }, { slug: 'isiklandirma', id: 8 },
  { slug: 'isiklandirma', id: 9 },
  { slug: 'diger-hizmetler', id: 1 }, { slug: 'diger-hizmetler', id: 2 }, { slug: 'diger-hizmetler', id: 3 },
  { slug: 'diger-hizmetler', id: 4 }, { slug: 'diger-hizmetler', id: 5 }, { slug: 'diger-hizmetler', id: 6 },
  { slug: 'diger-hizmetler', id: 7 }, { slug: 'diger-hizmetler', id: 8 }, { slug: 'diger-hizmetler', id: 9 }
];

// Kategoriler ve limitleri
const KATEGORILER = [
  { slug: 'kina', title: 'Kına', limit: 6 },
  { slug: 'nisan', title: 'Nişan', limit: 6 },
  { slug: 'dugun-nikah', title: 'Düğün & Nikah', limit: 6 },
  { slug: 'sunnet', title: 'Sünnet', limit: 6 },
  { slug: 'dogum-gunu', title: 'Doğum Günü', limit: 3 },
  { slug: 'fotograf-video', title: 'Fotoğraf & Video', limit: 3 },
  { slug: 'muzik', title: 'Müzik', limit: 3 },
  { slug: 'isiklandirma', title: 'Işıklandırma', limit: 3 },
  { slug: 'diger-hizmetler', title: 'Diğer Hizmetlerimiz', limit: 3 }
];

function getImageUrl(slug: string, id: number) {
  return `/gallery/${slug}/${id}.webp`;
}

export default function GaleriPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ slug: string; id: number } | null>(null);
  const [aktifKategori, setAktifKategori] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Kategori Bazlı Shuffle - sadece kategori değişince çalışır
  const shuffledPhotosByCategory = useMemo(() => {
    const result: { [key: string]: { slug: string; id: number }[] } = {};
    
    KATEGORILER.forEach(({ slug }) => {
      const categoryPhotos = ALL_PHOTOS.filter(photo => photo.slug === slug);
      // Her kategori kendi içinde bir kez karıştır
      result[slug] = [...categoryPhotos].sort(() => Math.random() - 0.5);
    });
    
    return result;
  }, []); // Boş dependency - sadece sayfa ilk yüklendiğinde çalışır

  // Kategori fotoğraflarını al (karıştırılmış)
  const getKategoriFotolari = (slug: string, limit: number) => {
    const shuffled = shuffledPhotosByCategory[slug] || [];
    return shuffled.slice(0, limit);
  };

  // Modal aç
  const openModal = (slug: string, id: number) => {
    setSelectedPhoto({ slug, id });
    setAktifKategori(slug);
    setModalOpen(true);
  };

  // Modal kapat
  const closeModal = () => {
    setSelectedPhoto(null);
    setAktifKategori(null);
    setModalOpen(false);
  };

  // Modal navigasyonu
  const navigatePhoto = (direction: number) => {
    if (!selectedPhoto || !aktifKategori) return;
    
    const kategoriFotolari = shuffledPhotosByCategory[aktifKategori] || [];
    const mevcutIndex = kategoriFotolari.findIndex(foto => 
      foto.slug === selectedPhoto.slug && foto.id === selectedPhoto.id
    );
    
    const newIndex = mevcutIndex + direction;
    if (newIndex >= 0 && newIndex < kategoriFotolari.length) {
      setSelectedPhoto(kategoriFotolari[newIndex]);
    }
  };

  // Klavye kontrolleri
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === 'ArrowLeft') navigatePhoto(-1);
      else if (e.key === 'ArrowRight') navigatePhoto(1);
    };

    window.addEventListener('keydown', handleEscape);
    window.addEventListener('keydown', handleArrowKeys);
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('keydown', handleArrowKeys);
    };
  }, [modalOpen, selectedPhoto, aktifKategori]);

  return (
    <div className="min-h-screen bg-dima-cream/50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-14 md:px-6 md:py-16 lg:px-8">
        <h1 className="font-serif text-2xl font-semibold text-gray-800 text-center sm:text-3xl md:text-4xl">
          Galeri
        </h1>
        <p className="mt-2 text-center text-sm text-dima-grey max-w-2xl mx-auto sm:mt-3 sm:text-base">
          Konsept ve hizmetlerimize göre kategorize edilmiş kareler. Büyütmek için tıklayın.
        </p>

        {/* Konseptler */}
        <section className="mt-8 sm:mt-10 md:mt-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gold-600 mb-1 sm:mb-2">
            Konseptler
          </p>
          {KATEGORILER.filter(k => k.slug.includes('kina') || k.slug.includes('nisan') || k.slug.includes('dugun') || k.slug.includes('sunnet') || k.slug.includes('dogum')).map(({ slug, title, limit }) => {
            const fotolar = getKategoriFotolari(slug, limit);
            if (fotolar.length === 0) return null;
            
            return (
              <div key={slug} className="mt-12 first:mt-0 sm:mt-14 md:mt-16">
                <h2 className="font-serif text-lg font-semibold text-gray-800 sm:text-xl md:text-2xl border-b border-gold-200/50 pb-2">
                  {title}
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 sm:mt-5 md:grid-cols-3 md:gap-4 lg:gap-5">
                  {fotolar.map((foto) => (
                    <button
                      key={`${foto.slug}-${foto.id}`}
                      type="button"
                      onClick={() => openModal(foto.slug, foto.id)}
                      className="group relative aspect-[4/3] min-h-[100px] overflow-hidden rounded-lg border border-gold-200/40 bg-gray-200 shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 active:scale-[0.98] sm:min-h-0 sm:rounded-xl sm:shadow-md"
                      aria-label={`${title} görseli ${foto.id} - büyütmek için tıklayın`}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-105"
                        style={{ backgroundImage: `url('${getImageUrl(foto.slug, foto.id)}')` }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Hizmetler */}
        <section className="mt-10 pt-8 border-t border-gold-200/30 sm:mt-14 sm:pt-10 md:mt-16 md:pt-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gold-600 mb-1 sm:mb-2">
            Hizmetler
          </p>
          {KATEGORILER.filter(k => !k.slug.includes('kina') && !k.slug.includes('nisan') && !k.slug.includes('dugun') && !k.slug.includes('sunnet') && !k.slug.includes('dogum')).map(({ slug, title, limit }) => {
            const fotolar = getKategoriFotolari(slug, limit);
            if (fotolar.length === 0) return null;
            
            return (
              <div key={slug} className="mt-12 first:mt-0 sm:mt-14 md:mt-16">
                <h2 className="font-serif text-lg font-semibold text-gray-800 sm:text-xl md:text-2xl border-b border-gold-200/50 pb-2">
                  {title}
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 sm:mt-5 md:grid-cols-3 md:gap-4 lg:gap-5">
                  {fotolar.map((foto) => (
                    <button
                      key={`${foto.slug}-${foto.id}`}
                      type="button"
                      onClick={() => openModal(foto.slug, foto.id)}
                      className="group relative aspect-[4/3] min-h-[100px] overflow-hidden rounded-lg border border-gold-200/40 bg-gray-200 shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 active:scale-[0.98] sm:min-h-0 sm:rounded-xl sm:shadow-md"
                      aria-label={`${title} görseli ${foto.id} - büyütmek için tıklayın`}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-105"
                        style={{ backgroundImage: `url('${getImageUrl(foto.slug, foto.id)}')` }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeModal}
          >
            {/* Kapat butonu */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 backdrop-blur-sm transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {aktifKategori && (
              <>
                {/* Geri ok */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto(-1);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 backdrop-blur-sm transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* İleri ok */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto(1);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 backdrop-blur-sm transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Resim kapsayıcısı - Kesin Sığdırma */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-h-[80vh] flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getImageUrl(selectedPhoto.slug, selectedPhoto.id)}
                alt="Galeri görseli"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
