'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TeklifAlButton from '@/components/TeklifAlButton';

const PREVIEW_LIMIT = 6;

type AyVeri = { yil: number; ay: number; baslik: string; adet: number };
type Foto = { slug: string; id: number };

function getImageUrl(slug: string, id: number) {
  return `/gallery/${slug}/${id}.webp`;
}

export default function ArsivPage() {
  const [months, setMonths] = useState<AyVeri[]>([]);
  const [shuffledByMonth, setShuffledByMonth] = useState<Record<string, Foto[]>>({});
  const [expandedMonths, setExpandedMonths] = useState<Set<string>>(new Set());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Foto | null>(null);
  const [modalPhotos, setModalPhotos] = useState<Foto[]>([]);

  useEffect(() => {
    fetch('/api/aylik')
      .then(r => r.json())
      .then(data => {
        if (!data.months?.length) return;
        setMonths(data.months);

        const shuffled: Record<string, Foto[]> = {};
        data.months.forEach((m: AyVeri) => {
          const slug = `yapilan-isler/${m.yil}/${String(m.ay).padStart(2, '0')}`;
          const all: Foto[] = Array.from({ length: m.adet }, (_, i) => ({ slug, id: i + 1 }));
          shuffled[`${m.yil}-${m.ay}`] = [...all].sort(() => Math.random() - 0.5);
        });
        setShuffledByMonth(shuffled);
      })
      .catch(() => {});
  }, []);

  const getKey = (m: AyVeri) => `${m.yil}-${m.ay}`;

  const toggleExpand = (key: string) => {
    setExpandedMonths(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const openModal = (foto: Foto, allPhotos: Foto[]) => {
    setSelectedPhoto(foto);
    setModalPhotos(allPhotos);
    setModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setSelectedPhoto(null);
    setModalPhotos([]);
    setModalOpen(false);
  }, []);

  const navigate = useCallback((dir: number) => {
    if (!selectedPhoto || !modalPhotos.length) return;
    const idx = modalPhotos.findIndex(f => f.slug === selectedPhoto.slug && f.id === selectedPhoto.id);
    const next = idx + dir;
    if (next >= 0 && next < modalPhotos.length) setSelectedPhoto(modalPhotos[next]);
  }, [selectedPhoto, modalPhotos]);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { closeModal(); return; }
      if (!modalOpen) return;
      if (e.key === 'ArrowLeft') navigate(-1);
      else if (e.key === 'ArrowRight') navigate(1);
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [modalOpen, navigate, closeModal]);

  const byYear = months.reduce<Record<number, AyVeri[]>>((acc, m) => {
    (acc[m.yil] ??= []).push(m);
    return acc;
  }, {});
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-dima-cream/50">
      {/* Hero */}
      <section className="relative h-[30vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/gallery/assets/arsiv-hero.webp')" }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-serif text-3xl font-light text-white drop-shadow-lg sm:text-4xl md:text-5xl">
              Geçmiş Çalışmalarımız
            </h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.3em] text-gold-300/90">
              Aylık arşivimizden özel anlar
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">


        {months.length === 0 && (
          <p className="py-20 text-center text-gray-400">Henüz arşiv fotoğrafı bulunmuyor.</p>
        )}

        {years.map(yil => (
          <div key={yil} className="mb-16">
            {/* Yıl ayracı */}
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gold-200/60" />
              <span className="font-serif text-2xl font-semibold text-gray-600">{yil}</span>
              <div className="h-px flex-1 bg-gold-200/60" />
            </div>

            <div className="grid gap-12">
              {byYear[yil].map(m => {
                const key = getKey(m);
                const allPhotos = shuffledByMonth[key] || [];
                const isExpanded = expandedMonths.has(key);
                const visible = isExpanded ? allPhotos : allPhotos.slice(0, PREVIEW_LIMIT);
                const hasMore = allPhotos.length > PREVIEW_LIMIT;

                return (
                  <div key={key}>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-600">
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
                        {m.adet} fotoğraf
                      </span>
                      <h2 className="font-serif text-2xl font-semibold text-gray-800 sm:text-3xl">
                        {m.baslik}
                      </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:gap-4">
                      {visible.map(foto => (
                        <button
                          key={`${foto.slug}-${foto.id}`}
                          type="button"
                          onClick={() => openModal(foto, allPhotos)}
                          className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gold-200/40 bg-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 sm:rounded-xl sm:shadow-md"
                          aria-label={`${m.baslik} - fotoğraf ${foto.id}`}
                        >
                          <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out group-hover:scale-110"
                            style={{ backgroundImage: `url('${getImageUrl(foto.slug, foto.id)}')` }}
                          />
                        </button>
                      ))}
                    </div>

                    {hasMore && (
                      <div className="mt-4 text-center">
                        <button
                          type="button"
                          onClick={() => toggleExpand(key)}
                          className="inline-flex items-center gap-2 rounded-full border border-gold-400 px-6 py-2 text-sm font-medium text-gold-600 transition-all duration-300 hover:scale-105 hover:bg-gold-50"
                        >
                          {isExpanded ? 'Daha az göster' : `Tümünü Göster (${allPhotos.length})`}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="border-t border-gold-200/30 bg-gradient-to-r from-gold-50 to-gold-100/50 py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-gray-800 sm:text-3xl">
            Beğendiğiniz bir çalışma mı var?
          </h2>
          <p className="mt-3 text-dima-grey">
            WhatsApp üzerinden hızlıca fiyat teklifi alın.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <TeklifAlButton className="text-base px-8 py-4" />
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full border-2 border-gold-500 px-8 py-4 text-base font-semibold text-gold-600 transition-all duration-300 hover:scale-105 hover:bg-gold-50 hover:shadow-lg"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={e => { if (e.target === e.currentTarget) closeModal(); }}
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={e => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={e => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative h-[80vh] w-[90vw]"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={getImageUrl(selectedPhoto.slug, selectedPhoto.id)}
                alt="Organizasyon arşiv görseli - Dima Dizayn Bergama"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
