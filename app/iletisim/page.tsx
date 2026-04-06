/**
 * app/iletisim/page.tsx — İletişim Sayfası (/iletisim)
 *
 * Bölümler:
 *  1. Hero           — arka plan görseli (contact-hero.webp) + başlık
 *  2. İletişim Bilgileri — telefon, e-posta, adres, sosyal medya, WhatsApp CTA
 *  3. Google Maps    — gömülü harita (sağ sütun)
 *  4. Alt CTA        — Galeri sayfasına yönlendirme
 *
 * İletişim bilgilerini güncellemek için aşağıdaki sabit değişkenleri düzenle.
 * Aynı bilgiler layout.tsx, Footer.tsx ve WhatsAppButton.tsx'te de geçmektedir.
 */
'use client';

import Link from 'next/link';
import YeniKonseptBanner from '@/components/YeniKonseptBanner';
import { Phone, MapPin, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';

export default function IletisimPage() {
  const whatsappNumber = "+905353679931";
  const phoneNumber = "05353679931";
  const whatsappMessage = "Merhaba Dima Dizayn, organizasyon hizmetleriniz hakkında bilgi almak istiyorum.";

  return (
    <div className="min-h-screen bg-dima-cream/50">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        {/* Arka plan görseli */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/gallery/assets/contact-hero.webp')" }}
        />
        {/* Koyu overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gold çizgi üstte */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />
        
        {/* Başlık */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-serif text-4xl font-light text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
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
              <h3 className="font-serif text-xl font-semibold text-gray-800">İşletme Sahibi:</h3>
              <p className="mt-2 text-lg font-medium text-gold-600">Ömer Faruk Yağcıoğlu</p>
            </div>

            {/* İletişim Bilgileri */}
            <div className="space-y-4">
              {/* Telefon */}
              <div className="flex items-start gap-4">
                <Link
                  href="tel:05353679931"
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600 transition-all duration-300 hover:bg-gold-200 hover:scale-105"
                  aria-label="Telefon ile ara"
                >
                  <Phone className="h-6 w-6" />
                </Link>
                <div>
                  <h4 className="font-semibold text-gray-800">Telefon</h4>
                  <Link
                    href="tel:05353679931"
                    className="block text-dima-grey hover:text-gold-600 transition-colors cursor-pointer hover:underline"
                  >
                    0535 367 99 31
                  </Link>
                </div>
              </div>

              {/* E-posta */}
              <div className="flex items-start gap-4">
                <Link
                  href="mailto:bilgi@dimadizayn.com"
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600 transition-all duration-300 hover:bg-gold-200 hover:scale-105"
                  aria-label="E-posta gönder"
                >
                  <MessageCircle className="h-6 w-6" />
                </Link>
                <div>
                  <h4 className="font-semibold text-gray-800">E-posta</h4>
                  <Link
                    href="mailto:bilgi@dimadizayn.com"
                    className="block text-dima-grey hover:text-gold-600 transition-colors cursor-pointer hover:underline"
                  >
                    bilgi@dimadizayn.com
                  </Link>
                </div>
              </div>

              {/* Adres */}
              <div className="flex items-start gap-4">
                <Link
                  href="https://maps.app.goo.gl/fgZw6DHVeDsscXWz5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600 transition-all duration-300 hover:bg-gold-200 hover:scale-105"
                  aria-label="Konumu Google Haritalar'da aç"
                >
                  <MapPin className="h-6 w-6" />
                </Link>
                <div>
                  <h4 className="font-semibold text-gray-800">Adres</h4>
                  <Link
                    href="https://maps.app.goo.gl/fgZw6DHVeDsscXWz5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-dima-grey hover:text-gold-600 transition-colors cursor-pointer hover:underline"
                  >
                    Ertuğrul Mah., İsmet İnönü Cd. No:36,<br />
                    35700, Bergama/İzmir
                  </Link>
                </div>
              </div>
            </div>

            {/* Sosyal Medya */}
            <div>
              <h4 className="mb-4 font-semibold text-gray-800">Sosyal Medya</h4>
              <div className="flex gap-4">
                <Link
                  href="https://instagram.com/dimadzyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-600 transition-all duration-300 hover:bg-gold-200 hover:scale-105"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://tiktok.com/@dimadizayn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-600 transition-all duration-300 hover:bg-gold-200 hover:scale-105"
                  aria-label="TikTok"
                >
                  {/* TikTok SVG ikonu */}
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.36-4.08-1.1-2.03-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@dimadizayn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-600 transition-all duration-300 hover:bg-gold-200 hover:scale-105"
                  aria-label="YouTube"
                >
                  <Youtube className="h-6 w-6" />
                </Link>
                <Link
                  href="https://facebook.com/dimadizaynn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-600 transition-all duration-300 hover:bg-gold-200 hover:scale-105"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
              </div>
            </div>

            {/* WhatsApp Butonu */}
            <div className="pt-4">
              <Link
                href={`https://wa.me/${whatsappNumber.replace('+', '').replace(/\s/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#128C7E] hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 sm:px-10"
              >
                {/* WhatsApp İkonu - Sabit buton ile aynı */}
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
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
                loading="lazy"
                className="lazy-load"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Dima Dizayn konumu - Google Haritalar"
              />
            </div>
          </div>
        </div>
      </section>

      <YeniKonseptBanner />

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
