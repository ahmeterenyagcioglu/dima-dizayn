'use client';

import GallerySection from '@/components/GallerySection';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Duyuru mesaj havuzu
const ANNOUNCEMENT_MESSAGES = [
  ' 2026 Sezonu Rezervasyonlarımız Devam Ediyor! Yerinizi ayırtmayı unutmayın.',
  ' Hayallerinizi Ertelemeyin: 2026 organizasyonları için takvimimiz doluyor.',
  ' 2026\'da Dima Dizayn farkıyla parlamak için şimdiden plan yapalım.',
  ' 2026 Sezonu İçin Özel Fırsat: %10 indirim için hemen iletişime geçin!'
];

export default function HomePage() {
  const [announcementMessage, setAnnouncementMessage] = useState('');

  useEffect(() => {
    // Rastgele mesaj seç
    const randomIndex = Math.floor(Math.random() * ANNOUNCEMENT_MESSAGES.length);
    setAnnouncementMessage(ANNOUNCEMENT_MESSAGES[randomIndex]);
  }, []);

  return (
    <>
      {/* Hero Section - tam ekran genişliğinde */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Yedek arka plan: Görsel yüklenmezse görünen gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)',
          }}
          aria-hidden
        />
        {/* Arka plan görseli - Next.js Image ile optimize */}
        <div className="absolute inset-0">
          <Image
            src="/hero.webp"
            alt="Dima Dizayn Bergama Organizasyon"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8QAGhABAQEAAwEAAAAAAAAAAAAAAExQUGBwgZGhsfH/8QAIBAAAQQDAAAAAAAAAAAAAAAAAAABAgMEBREhBjFxEhNRYYH/2gAMAwEAAhEDEQA/AAU6qo1o9P/9k="
          />
        </div>
        {/* Koyu overlay - metnin okunabilirliği */}
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        {/* İnce gold çizgi üstte */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" aria-hidden />

        {/* Slogan */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-light tracking-wide text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            Dima Dizayn ile Hayallerinizi Organize Ediyoruz
          </h1>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-gold-300/90 sm:text-base">
            <Link href="/galeri#dugun-nikah" className="hover:text-gold-200 transition-colors duration-300">Düğün</Link> ·{' '}
            <Link href="/galeri#nisan" className="hover:text-gold-200 transition-colors duration-300">Nişan</Link> ·{' '}
            <Link href="/galeri#kina" className="hover:text-gold-200 transition-colors duration-300">Kına</Link> ·{' '}
            <Link href="/galeri#sunnet" className="hover:text-gold-200 transition-colors duration-300">Sünnet</Link>
          </p>
        </div>
      </section>

      {/* Duyuru Bandı */}
      <section className="relative bg-gradient-to-r from-gold-50/90 via-gold-100/95 to-gold-50/90 backdrop-blur-sm border-y border-gold-200/30">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-center">
            <span className="text-2xl">🗓️</span>
            <p className="text-sm font-medium text-gray-800 sm:text-base">
              {announcementMessage}{' '}Hayalinizdeki organizasyon için{' '}
              <a
                href="https://wa.me/905353679931?text=Merhaba%20Dima%20Dizayn,%202026%20sezonu%20i%C3%A7in%20rezervasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-600 hover:text-gold-700 underline font-semibold transition-colors"
              >
                hemen WhatsApp'tan teklif alın!
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" className="border-t border-gold-200/30 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-gray-800 sm:text-3xl text-center">
            Hizmetlerimiz
          </h2>
          
          {/* Alt Başlık - Kısa Açıklama */}
          <p className="mt-2 text-center text-sm font-light text-gray-600">
            Düğün, nişan, kına ve özel günleriniz için profesyonel organizasyon hizmetleri
          </p>
          
          {/* Hizmet Kartları */}
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link 
              href="/galeri"
              className="group rounded-xl border border-gold-200/40 bg-dima-cream/50 p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
            >
              <h3 className="font-serif text-lg font-semibold text-gray-800 group-hover:text-gold-700 transition-colors">Organizasyon</h3>
              <p className="mt-2 text-sm text-dima-grey">
                Mekan, dekorasyon ve program planlaması ile gününüzü sorunsuz yönetiyoruz.
              </p>
            </Link>
            <Link 
              href="/galeri#fotograf-video"
              className="group rounded-xl border border-gold-200/40 bg-dima-cream/50 p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
            >
              <h3 className="font-serif text-lg font-semibold text-gray-800 group-hover:text-gold-700 transition-colors">Fotoğraf & Video</h3>
              <p className="mt-2 text-sm text-dima-grey">
                Anlarınızı profesyonel çekim ve kurgu ile ölümsüzleştiriyoruz.
              </p>
            </Link>
            <Link 
              href="/galeri#muzik"
              className="group rounded-xl border border-gold-200/40 bg-dima-cream/50 p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 sm:col-span-2 lg:col-span-1"
            >
              <h3 className="font-serif text-lg font-semibold text-gray-800 group-hover:text-gold-700 transition-colors">Müzik</h3>
              <p className="mt-2 text-sm text-dima-grey">
                DJ ve canlı müzik seçenekleriyle davetlilerinize unutulmaz bir atmosfer sunuyoruz.
              </p>
            </Link>
          </div>
          
          {/* Hizmet Bölgelerimiz Başlığı */}
          <div className="mt-16 text-center">
            <h3 className="text-lg font-medium text-gray-700">
              Hizmet Bölgelerimiz
            </h3>
          </div>
          
          {/* Modern Badge Etiketleri */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="group inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors duration-300 cursor-default">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Bergama</span>
            </div>
            <div className="group inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors duration-300 cursor-default">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Dikili</span>
            </div>
            <div className="group inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors duration-300 cursor-default">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Kınık</span>
            </div>
            <div className="group inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors duration-300 cursor-default">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="whitespace-nowrap">Kozak Yaylası</span>
            </div>
          </div>
          
          {/* SEO Metni - Callout Kutusu */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-3 p-4 bg-gold-50/50 rounded-lg border border-gold-200/30">
              <svg className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold">Bergama</span> başta olmak üzere <span className="font-semibold">Dikili</span>, <span className="font-semibold">Kınık</span> ve <span className="font-semibold">Kozak Yaylası</span> gibi çevre ilçeler ve köylerde de yanınızdayız. İzmir'in her köşesinde; <span className="font-semibold">düğün</span>, <span className="font-semibold">nişan</span> ve <span className="font-semibold">sünnet</span> organizasyonlarınız için profesyonel ekipmanlarımız ve özgün konseptlerimizle hayallerinizi gerçeğe dönüştürüyoruz. Bergama organizasyon firmaları arasında bölgeyi tanıyan, çevre köy ve ilçelere hakim tecrübemizle en özel günlerinizi kusursuz kılıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mutlu Anlardan Kareler - Grid Galeri (tıklayınca büyür) */}
      <section className="border-t border-gold-200/30 bg-dima-cream/50 py-12 sm:py-16">
        <div className="flex flex-col items-center justify-center w-full text-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-gray-800 sm:text-3xl">
              Mutlu Anlardan Kareler
            </h2>
            <p className="mt-3 text-center text-sm text-dima-grey max-w-2xl mx-auto">
              Özel günlerinizdeki en güzel anları yakalıyoruz
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {/* İlk Foto - Kırmızı Taht */}
              <div className="group relative overflow-hidden rounded-xl border border-gold-200/40 bg-dima-cream/50 shadow-md transition-all duration-300 hover:shadow-lg hover:border-gold-300/60 w-full">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/gallery/1.webp"
                    alt="Kına Organizasyonu - Bergama Dima Dizayn"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <p className="text-white text-sm font-medium">
                    <span className="block">Kına Organizasyonu</span>
                    <Link 
                      href="/galeri#kina" 
                      className="text-gold-300 hover:text-gold-200 transition-colors underline"
                    >
                      Detayları için tıklayın
                    </Link>
                  </p>
                </div>
              </div>

              {/* İkinci Foto - Beyaz Çiçekli */}
              <div className="group relative overflow-hidden rounded-xl border border-gold-200/40 bg-dima-cream/50 shadow-md transition-all duration-300 hover:shadow-lg hover:border-gold-300/60 w-full">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/gallery/2.webp"
                    alt="Nişan Organizasyonu - Bergama Dima Dizayn"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <p className="text-white text-sm font-medium">
                    <span className="block">Nişan Organizasyonu</span>
                    <Link 
                      href="/galeri#nisan" 
                      className="text-gold-300 hover:text-gold-200 transition-colors underline"
                    >
                      Detayları için tıklayın
                    </Link>
                  </p>
                </div>
              </div>

              {/* Üçüncü Foto - Mavi-Sarı Balonlu */}
              <div className="group relative overflow-hidden rounded-xl border border-gold-200/40 bg-dima-cream/50 shadow-md transition-all duration-300 hover:shadow-lg hover:border-gold-300/60 w-full">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/gallery/3.webp"
                    alt="Sünnet Organizasyonu - Bergama Dima Dizayn"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <p className="text-white text-sm font-medium">
                    <span className="block">Sünnet Organizasyonu</span>
                    <Link 
                      href="/galeri#sunnet" 
                      className="text-gold-300 hover:text-gold-200 transition-colors underline"
                    >
                      Detayları için tıklayın
                    </Link>
                  </p>
                </div>
              </div>

              {/* Dördüncü Foto - Düğün Masası */}
              <div className="group relative overflow-hidden rounded-xl border border-gold-200/40 bg-dima-cream/50 shadow-md transition-all duration-300 hover:shadow-lg hover:border-gold-300/60 w-full">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/gallery/4.webp"
                    alt="Düğün & Nikah Organizasyonu - Bergama Dima Dizayn"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <p className="text-white text-sm font-medium">
                    <span className="block">Düğün & Nikah Organizasyonu</span>
                    <Link 
                      href="/galeri#dugun-nikah" 
                      className="text-gold-300 hover:text-gold-200 transition-colors underline"
                    >
                      Detayları için tıklayın
                    </Link>
                  </p>
                </div>
              </div>

              {/* Beşinci Foto - Müzik Sistemi */}
              <div className="group relative overflow-hidden rounded-xl border border-gold-200/40 bg-dima-cream/50 shadow-md transition-all duration-300 hover:shadow-lg hover:border-gold-300/60 w-full">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/gallery/5.webp"
                    alt="Müzik & Ses Sistemleri - Bergama Dima Dizayn"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <p className="text-white text-sm font-medium">
                    <span className="block">Müzik & Ses Sistemleri</span>
                    <Link 
                      href="/galeri#muzik" 
                      className="text-gold-300 hover:text-gold-200 transition-colors underline"
                    >
                      Detayları için tıklayın
                    </Link>
                  </p>
                </div>
              </div>

              {/* Altıncı Foto - Kameralar */}
              <div className="group relative overflow-hidden rounded-xl border border-gold-200/40 bg-dima-cream/50 shadow-md transition-all duration-300 hover:shadow-lg hover:border-gold-300/60 w-full">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/gallery/6.webp"
                    alt="Fotoğraf & Video Çekimi - Bergama Dima Dizayn"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <p className="text-white text-sm font-medium">
                    <span className="block">Fotoğraf & Video Çekimi</span>
                    <Link 
                      href="/galeri#fotograf-video" 
                      className="text-gold-300 hover:text-gold-200 transition-colors underline"
                    >
                      Detayları için tıklayın
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Konum */}
      <section id="konum" className="border-t border-gold-200/30 bg-dima-cream/50 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-gray-800 sm:text-3xl text-center">
            Konum
          </h2>
          <p className="mt-2 text-sm text-dima-grey w-full text-center block mb-4">
            Ertuğrul, İsmet İnönü Cd. No:36, 35700 Bergama/İzmir
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-gold-200/40 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.5194757445743!2d27.178967099999994!3d39.1174089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9f905ec8b153d%3A0x5b8b877589f6c14c!2sDima%20Dizayn!5e0!3m2!1str!2str!4v1770903176470!5m2!1str!2str"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dima Dizayn konumu - Google Haritalar"
              className="h-[450px] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
