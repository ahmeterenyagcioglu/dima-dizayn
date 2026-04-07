/**
 * app/galeri/page.tsx — Galeri Sayfası (/galeri)
 *
 * Özellikler:
 *  - ALL_PHOTOS dizisindeki tüm fotoğrafları kategoriye göre gruplandırır
 *  - Her kategori sayfa yüklenirken kendi içinde rastgele sıralanır (shuffle)
 *  - Tab sistemi: Tüm / Konsept Kurulumları / Ek Hizmetler
 *  - Her kategoride limit kadar önizleme gösterilir; modal'da kategorinin tamamı gezilir
 *  - URL hash (#kina, #nisan …) ile dışarıdan doğrudan bölüme yönlendirme desteklenir
 *  - Lightbox modal: sol/sağ ok, ← → klavye kısayolları, Esc ile kapatma
 *
 * Yeni fotoğraf eklemek için: ALL_PHOTOS dizisine { slug, id } satırı ekle.
 * Yeni kategori eklemek için: ALL_PHOTOS + KATEGORILER dizisine ekle.
 */
'use client';

// useMemo kullanılmıyor; ilerleyen düzenlemelerde ihtiyaç duyulursa eklenir.
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TeklifAlButton from '@/components/TeklifAlButton';

/*
  Galeri veri kaynağı — tüm fotoğraflar burada tanımlanır.
  Format: { slug: 'klasor-adi', id: dosya-numarasi }
  Karşılık geldiği dosya yolu: public/gallery/<slug>/<id>.webp

  Fotoğraf eklemek için ilgili kategorinin altına satır eklemek yeterli.
  Dosyanın gerçekten public/gallery/<slug>/<id>.webp konumunda olduğundan emin ol.
*/
const ALL_PHOTOS = [
  // Kına fotoğrafları (18 adet)
  { slug: 'kina', id: 1 }, { slug: 'kina', id: 2 }, { slug: 'kina', id: 3 },
  { slug: 'kina', id: 4 }, { slug: 'kina', id: 5 }, { slug: 'kina', id: 6 }, { slug: 'kina', id: 7 }, { slug: 'kina', id: 8 }, { slug: 'kina', id: 9 },
  { slug: 'kina', id: 10 }, { slug: 'kina', id: 11 }, { slug: 'kina', id: 12 }, { slug: 'kina', id: 13 }, { slug: 'kina', id: 14 }, { slug: 'kina', id: 15 },
  { slug: 'kina', id: 16 }, { slug: 'kina', id: 17 }, { slug: 'kina', id: 18 },
  
  // Nişan fotoğrafları (19 adet)
  { slug: 'nisan', id: 1 }, { slug: 'nisan', id: 2 }, { slug: 'nisan', id: 3 },
  { slug: 'nisan', id: 4 }, { slug: 'nisan', id: 5 }, { slug: 'nisan', id: 6 },
  { slug: 'nisan', id: 7 }, { slug: 'nisan', id: 8 }, { slug: 'nisan', id: 9 },
  { slug: 'nisan', id: 10 }, { slug: 'nisan', id: 11 }, { slug: 'nisan', id: 12 },
  { slug: 'nisan', id: 13 }, { slug: 'nisan', id: 14 }, { slug: 'nisan', id: 15 },
  { slug: 'nisan', id: 16 }, { slug: 'nisan', id: 17 }, { slug: 'nisan', id: 18 },
  { slug: 'nisan', id: 19 }, 

  // Düğün & Nikah fotoğrafları (13 adet)
  { slug: 'dugun-nikah', id: 1 }, { slug: 'dugun-nikah', id: 2 }, { slug: 'dugun-nikah', id: 3 },
  { slug: 'dugun-nikah', id: 4 }, { slug: 'dugun-nikah', id: 5 }, { slug: 'dugun-nikah', id: 6 },
  { slug: 'dugun-nikah', id: 7 }, { slug: 'dugun-nikah', id: 8 }, { slug: 'dugun-nikah', id: 9 },
  { slug: 'dugun-nikah', id: 10 }, { slug: 'dugun-nikah', id: 11 }, { slug: 'dugun-nikah', id: 12 }, { slug: 'dugun-nikah', id: 13 },
  
  // Sünnet fotoğrafları (17 adet)
  { slug: 'sunnet', id: 1 }, { slug: 'sunnet', id: 2 }, { slug: 'sunnet', id: 3 },
  { slug: 'sunnet', id: 4 }, { slug: 'sunnet', id: 5 }, { slug: 'sunnet', id: 6 },
  { slug: 'sunnet', id: 7 }, { slug: 'sunnet', id: 8 }, { slug: 'sunnet', id: 9 },
  { slug: 'sunnet', id: 10 }, { slug: 'sunnet', id: 11 }, { slug: 'sunnet', id: 12 },
  { slug: 'sunnet', id: 13 }, { slug: 'sunnet', id: 14 }, { slug: 'sunnet', id: 15 },
  { slug: 'sunnet', id: 16 }, { slug: 'sunnet', id: 17 },
  
  // Doğum Günü fotoğrafları (10 adet)
  { slug: 'dogum-gunu', id: 1 }, { slug: 'dogum-gunu', id: 2 }, { slug: 'dogum-gunu', id: 3 },
  { slug: 'dogum-gunu', id: 4 }, { slug: 'dogum-gunu', id: 5 }, { slug: 'dogum-gunu', id: 6 },
  { slug: 'dogum-gunu', id: 7 }, { slug: 'dogum-gunu', id: 8 }, { slug: 'dogum-gunu', id: 9 },
  { slug: 'dogum-gunu', id: 10 },
  
  // Fotoğraf & Video fotoğrafları (4 adet)
  { slug: 'fotograf-video', id: 1 }, { slug: 'fotograf-video', id: 2 }, { slug: 'fotograf-video', id: 3 }, { slug: 'fotograf-video', id: 4 },
  
  // Müzik fotoğrafları (9 adet)
  { slug: 'muzik', id: 1 }, { slug: 'muzik', id: 2 }, { slug: 'muzik', id: 3 },
  { slug: 'muzik', id: 4 }, { slug: 'muzik', id: 5 }, { slug: 'muzik', id: 6 }, { slug: 'muzik', id: 7 }, { slug: 'muzik', id: 8 }, { slug: 'muzik', id: 9 },
  
  // Işıklandırma fotoğrafları (9 adet)
  { slug: 'isiklandirma', id: 1 }, { slug: 'isiklandirma', id: 2 }, { slug: 'isiklandirma', id: 3 },
  { slug: 'isiklandirma', id: 4 }, { slug: 'isiklandirma', id: 5 }, { slug: 'isiklandirma', id: 6 }, { slug: 'isiklandirma', id: 7 }, { slug: 'isiklandirma', id: 8 },
  { slug: 'isiklandirma', id: 9 },
  
  // Diğer Hizmetler fotoğrafları (9 adet)
  { slug: 'diger-hizmetler', id: 1 }, { slug: 'diger-hizmetler', id: 2 }, { slug: 'diger-hizmetler', id: 3 },
  { slug: 'diger-hizmetler', id: 4 }, { slug: 'diger-hizmetler', id: 5 }, { slug: 'diger-hizmetler', id: 6 },
  { slug: 'diger-hizmetler', id: 7 }, { slug: 'diger-hizmetler', id: 8 }, { slug: 'diger-hizmetler', id: 9 },

  // Yeni Konseptler (8 adet)
  { slug: 'yeni-konseptler', id: 1 }, { slug: 'yeni-konseptler', id: 2 }, { slug: 'yeni-konseptler', id: 3 },
  { slug: 'yeni-konseptler', id: 4 }, { slug: 'yeni-konseptler', id: 5 }, { slug: 'yeni-konseptler', id: 6 },
  { slug: 'yeni-konseptler', id: 7 }, { slug: 'yeni-konseptler', id: 8 }

  // NOT: Artık burada fotoğraf sınırı yok! İstediğiniz kadar fotoğraf ekleyebilirsiniz.
  // Örnek: { slug: 'kina', id: 19 }, { slug: 'kina', id: 20 }, ... { slug: 'kina', id: 50 }
  // Sistem otomatik olarak mevcut tüm fotoğrafları işleyecektir.
];

/*
  Kategori tanımları.
  - slug   : ALL_PHOTOS ile eşleşmeli ve URL hash olarak kullanılır (#slug)
  - title  : Sayfada görünen başlık
  - limit  : Önizleme grid'inde kaç fotoğraf gösterileceği.
             Modal açıldığında bu limit geçersizdir; kategorinin tüm fotoğrafları gezilir.
*/
const KATEGORILER = [
  { slug: 'yeni-konseptler', title: '✨ Yeni Konseptlerimiz', limit: 6 },
  { slug: 'kina', title: 'Kına', limit: 6 },
  { slug: 'nisan', title: 'Nişan', limit: 6 },
  { slug: 'dugun-nikah', title: 'Düğün & Nikah', limit: 6 },
  { slug: 'sunnet', title: 'Sünnet', limit: 6 },
  { slug: 'dogum-gunu', title: 'Doğum Günü', limit: 3 },
  { slug: 'fotograf-video', title: 'Fotoğraf & Video', limit: 3 },
  { slug: 'muzik', title: 'Müzik', limit: 3 },
  { slug: 'isiklandirma', title: 'Işıklandırma', limit: 3 },
  { slug: 'diger-hizmetler', title: 'Diğer Hizmetlerimiz', limit: 3 }
  // NOT: Limit sadece kullanıcıya gösterilecek fotoğraf sayısıdır.
  // Modal içinde kategorideki TÜM fotoğraflar gezilebilir.
];

function getImageUrl(slug: string, id: number) {
  return `/gallery/${slug}/${id}.webp`;
}

export default function GaleriPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ slug: string; id: number } | null>(null);
  const [aktifKategori, setAktifKategori] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'konseptler' | 'hizmetler'>('all');
  const [expandedSlugs, setExpandedSlugs] = useState<Set<string>>(new Set());
  const [shuffledPhotosByCategory, setShuffledPhotosByCategory] = useState<{ [key: string]: { slug: string; id: number }[] }>({});

  // URL hash takip sistemi
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Tüm resimlerin yüklenmesini bekle
      const checkImagesLoaded = () => {
        const images = document.querySelectorAll('img');
        const allLoaded = Array.from(images).every(img => img.complete);
        return allLoaded;
      };

      const scrollToHash = () => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
          });
        }
      };

      // Resimler hemen yüklendiyse bekleme
      if (checkImagesLoaded()) {
        setTimeout(scrollToHash, 100);
      } else {
        // Resimlerin yüklenmesini bekle
        const interval = setInterval(() => {
          if (checkImagesLoaded()) {
            clearInterval(interval);
            setTimeout(scrollToHash, 100);
          }
        }, 100);

        // 5 saniye sonra beklemeyi bırak
        setTimeout(() => {
          clearInterval(interval);
          scrollToHash();
        }, 5000);
      }
    }
  }, []);

  // Sayfa yüklendiğinde fotoğrafları karıştır
  useEffect(() => {
    const result: { [key: string]: { slug: string; id: number }[] } = {};
    
    KATEGORILER.forEach(({ slug }) => {
      const categoryPhotos = ALL_PHOTOS.filter(photo => photo.slug === slug);
      // Her kategori kendi içinde bir kez karıştır
      result[slug] = [...categoryPhotos].sort(() => Math.random() - 0.5);
    });
    
    setShuffledPhotosByCategory(result);
  }, []); // Boş dependency array - sadece sayfa ilk yüklendiğinde çalışırılmış)

  const getKategoriFotolari = (slug: string, limit: number) => {
    const shuffled = shuffledPhotosByCategory[slug] || [];
    return expandedSlugs.has(slug) ? shuffled : shuffled.slice(0, limit);
  };

  const toggleExpand = (slug: string) => {
    setExpandedSlugs(prev => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  };

  // Tab'e göre kategorileri filtrele
  const getFilteredCategories = () => {
    if (activeTab === 'all') return KATEGORILER;
    if (activeTab === 'konseptler') {
      return KATEGORILER.filter(k =>
        k.slug.includes('kina') || k.slug.includes('nisan') || k.slug.includes('dugun') || k.slug.includes('sunnet') || k.slug.includes('dogum') || k.slug.includes('yeni-konseptler')
      );
    }
    if (activeTab === 'hizmetler') {
      return KATEGORILER.filter(k =>
        !k.slug.includes('kina') && !k.slug.includes('nisan') && !k.slug.includes('dugun') && !k.slug.includes('sunnet') && !k.slug.includes('dogum') && !k.slug.includes('yeni-konseptler')
      );
    }
    return KATEGORILER;
  };

  // Modal aç — tıklanan fotoğrafın slug ve id'sini state'e yaz
  const openModal = (slug: string, id: number) => {
    setSelectedPhoto({ slug, id });
    setAktifKategori(slug);
    setModalOpen(true);
  };

  /*
    Modal kapat.
    useCallback ile sabit referans oluşturulur; böylece aşağıdaki klavye
    useEffect'i her render'da yeniden bağlanmak zorunda kalmaz.
  */
  const closeModal = useCallback(() => {
    setSelectedPhoto(null);
    setAktifKategori(null);
    setModalOpen(false);
  }, []);

  /*
    Modal içi fotoğraf navigasyonu (direction: -1 geri, +1 ileri).
    useCallback bağımlılıkları: selectedPhoto, aktifKategori, shuffledPhotosByCategory.
    Bu sayede klavye useEffect doğru bağımlılık listesiyle çalışır.
  */
  const navigatePhoto = useCallback((direction: number) => {
    if (!selectedPhoto || !aktifKategori) return;

    const kategoriFotolari = shuffledPhotosByCategory[aktifKategori] || [];
    const mevcutIndex = kategoriFotolari.findIndex(
      (foto) => foto.slug === selectedPhoto.slug && foto.id === selectedPhoto.id
    );

    const newIndex = mevcutIndex + direction;
    if (newIndex >= 0 && newIndex < kategoriFotolari.length) {
      setSelectedPhoto(kategoriFotolari[newIndex]);
    }
  }, [selectedPhoto, aktifKategori, shuffledPhotosByCategory]);

  /*
    Klavye kontrolleri: Esc (kapat), ← (önceki), → (sonraki).

    Önceki kodda iki ayrı addEventListener kullanılıyordu; bu gereksiz yük
    oluşturuyordu. Tek bir handler yeterlidir.

    Bağımlılıklar: modalOpen, navigatePhoto, closeModal.
    navigatePhoto ve closeModal useCallback'e alındığı için bu effect yalnızca
    modal açma/kapama durumunda yeniden bağlanır — gereksiz yeniden bağlanma yok.
  */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { closeModal(); return; }
      if (!modalOpen) return;
      if (e.key === 'ArrowLeft') navigatePhoto(-1);
      else if (e.key === 'ArrowRight') navigatePhoto(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, navigatePhoto, closeModal]);

  return (
    <div className="min-h-screen bg-dima-cream/50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-14 md:px-6 md:py-16 lg:px-8">
        {/* Ana Başlık */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl font-semibold text-gray-800 text-center sm:text-5xl md:text-6xl">
            Galeri
          </h1>
          <p className="mt-4 text-lg text-dima-grey max-w-2xl mx-auto">
            Özel anlarınızdan seçkin kareler
          </p>
        </div>

        {/* Modern Tab Sistemi */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg shadow-sm border border-gray-200 p-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-md font-medium text-sm transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-gold-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              Tüm Kareler
            </button>
            <button
              onClick={() => setActiveTab('konseptler')}
              className={`px-6 py-3 rounded-md font-medium text-sm transition-all duration-200 ${
                activeTab === 'konseptler'
                  ? 'bg-gold-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              Konsept Kurulumları
            </button>
            <button
              onClick={() => setActiveTab('hizmetler')}
              className={`px-6 py-3 rounded-md font-medium text-sm transition-all duration-200 ${
                activeTab === 'hizmetler'
                  ? 'bg-gold-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              Ek Hizmetlerimiz
            </button>
          </div>
        </div>

        {/* Kategori Grid */}
        <div className="grid gap-8 sm:gap-10 md:gap-12">
          {getFilteredCategories().map(({ slug, title, limit }) => {
            const tumFotolar = shuffledPhotosByCategory[slug] || [];
            const fotolar = getKategoriFotolari(slug, limit);
            if (fotolar.length === 0) return null;
            const isExpanded = expandedSlugs.has(slug);
            const hasMore = tumFotolar.length > limit;

            return (
              <div key={slug} className="animate-fade-in h-auto">
                <h2
                  id={slug}
                  className="font-serif text-2xl font-semibold text-gray-800 sm:text-3xl border-b border-gold-200/50 pb-2"
                  style={{ scrollMarginTop: '130px' }}
                >
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
                      title={`${title} - Bergama ${title} organizasyonu`}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-105"
                        style={{ backgroundImage: `url('${getImageUrl(foto.slug, foto.id)}')` }}
                      />
                    </button>
                  ))}
                </div>
                {hasMore && (
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      onClick={() => toggleExpand(slug)}
                      className="inline-flex items-center gap-2 rounded-full border border-gold-400 px-6 py-2 text-sm font-medium text-gold-600 transition-all duration-300 hover:bg-gold-50 hover:scale-105"
                    >
                      {isExpanded
                        ? `Daha az göster`
                        : `Tümünü Göster (${tumFotolar.length})`}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          >
            {/* Kapat butonu */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* İleri ok */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto(1);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
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
              className="relative w-[90vw] h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getImageUrl(selectedPhoto.slug, selectedPhoto.id)}
                alt="Galeri görseli"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* animate-fade-in sınıfı globals.css'te tanımlıdır; burada tekrar tanımlamaya gerek yok. */}

      {/* Teklif CTA */}
      <section className="border-t border-gold-200/30 bg-gradient-to-r from-gold-50 to-gold-100/50 py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-gray-800 sm:text-3xl">
            Beğendiğiniz bir konsept mi var?
          </h2>
          <p className="mt-3 text-dima-grey">
            WhatsApp üzerinden hızlıca fiyat teklifi alın.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <TeklifAlButton className="text-base px-8 py-4" />
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full border-2 border-gold-500 px-8 py-4 text-base font-semibold text-gold-600 transition-all duration-300 hover:bg-gold-50 hover:scale-105 hover:shadow-lg"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
