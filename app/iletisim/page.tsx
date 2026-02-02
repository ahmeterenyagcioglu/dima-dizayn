'use client';

import Link from 'next/link';
import { Phone, MapPin, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';

export default function IletisimPage() {
  const whatsappNumber = "+905353679931";
  const phoneNumber = "05353679931";
  const whatsappMessage = "Merhaba Dima Dizayn, organizasyon hizmetleriniz hakkında bilgi almak istiyorum.";

  return (
    <div className="min-h-screen bg-dima-cream/50">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        {/* Arka plan görseli */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/contact-hero.jpg')" }}
        />
        {/* Koyu overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gold çizgi üstte */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />
        
        {/* Başlık */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-serif text-4xl font-light text-white drop-shadow-lg sm:text-5xl md:text-6xl">
              İletişim
            </h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-gold-300/90 sm:text-base">
              Bizimle İletişime Geçin
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Bilgileri ve Harita */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Sol Taraf - İletişim Bilgileri */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-gray-800 sm:text-4xl">
                Bizimle İletişime Geçin
              </h2>
              <p className="mt-4 text-lg text-dima-grey">
                Özel günlerinizi unutulmaz kılmak için buradayız. Sorularınız için bize ulaşmaktan çekinmeyin.
              </p>
            </div>

            {/* İşletme Sahibi */}
            <div className="rounded-xl border border-gold-200/40 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-gray-800">İşletme Sahibi</h3>
              <p className="mt-2 text-lg font-medium text-gold-600">Ömer Faruk Yağcıoğlu</p>
            </div>

            {/* İletişim Bilgileri */}
            <div className="space-y-4">
              {/* Telefon */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-100">
                  <Phone className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Telefon</h4>
                  <Link
                    href={`tel:${phoneNumber}`}
                    className="block text-dima-grey hover:text-gold-600 transition-colors cursor-pointer hover:underline"
                  >
                    {phoneNumber}
                  </Link>
                </div>
              </div>

              {/* Adres */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-100">
                  <MapPin className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Adres</h4>
                  <p className="text-dima-grey">
                    Ertuğrul, İsmet İnönü Cd. No:36<br />
                    35700 Bergama/İzmir
                  </p>
                </div>
              </div>
            </div>

            {/* Sosyal Medya */}
            <div>
              <h4 className="mb-4 font-semibold text-gray-800">Sosyal Medya</h4>
              <div className="flex gap-4">
                <Link
                  href="https://instagram.com/dimadizayn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-600 transition-colors hover:bg-gold-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://facebook.com/dimadizayn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-600 transition-colors hover:bg-gold-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.youtube.com/@dimadizayn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-600 transition-colors hover:bg-gold-200"
                  aria-label="YouTube"
                >
                  <Youtube className="h-6 w-6" />
                </Link>
                <Link
                  href="https://tiktok.com/@dimadizayn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-600 transition-colors hover:bg-gold-200"
                  aria-label="TikTok"
                >
                  {/* TikTok SVG ikonu */}
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.36-4.08-1.1-2.03-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* WhatsApp Butonu */}
            <div className="pt-4">
              <Link
                href={`https://wa.me/${whatsappNumber.replace('+', '').replace(/\s/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-green-500 px-6 py-4 text-lg font-semibold text-white transition-all hover:bg-green-600 hover:shadow-lg sm:px-8"
              >
                <MessageCircle className="h-6 w-6" />
                WhatsApp'tan Hemen Yaz
              </Link>
            </div>
          </div>

          {/* Sağ Taraf - Google Maps */}
          <div className="lg:h-full">
            <div className="h-full min-h-[400px] overflow-hidden rounded-xl border border-gold-200/40 shadow-lg lg:min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.5194757445743!2d27.178967099999994!3d39.1174089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9f905ec8b153d%3A0x5b8b877589f6c14c!2sDima%20Dizayn!5e0!3m2!1str!2str!4v1770040516919!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dima Dizayn konumu - Google Haritalar"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alt CTA */}
      <section className="border-t border-gold-200/30 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-gray-800 sm:text-4xl">
            Hayalinizdeki Organizasyon İçin Hazırız
          </h2>
          <p className="mt-4 text-lg text-dima-grey">
            Size özel konseptlerimizle en mutlu gününüzü planlayalım.
          </p>
          <div className="mt-8">
            <Link
              href="/galeri"
              className="inline-flex items-center justify-center rounded-lg border border-gold-400 bg-gold-400 px-8 py-3 text-base font-medium text-white transition-all hover:bg-gold-500 hover:border-gold-500 hover:shadow-lg sm:px-10 sm:py-4 sm:text-lg"
            >
              Çalışmalarımızı İnceleyin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
