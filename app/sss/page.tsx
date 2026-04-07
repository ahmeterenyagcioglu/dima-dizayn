'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import YeniKonseptBanner from '@/components/YeniKonseptBanner';
import TeklifAlButton from '@/components/TeklifAlButton';

const SSS = [
  {
    soru: 'Ne kadar önceden rezervasyon yapmalıyım?',
    cevap:
      'Özellikle düğün ve nişan sezonunda takvimimiz hızlı dolmaktadır. Organizasyon tarihinizden en az 2–3 ay önce rezervasyon yaptırmanızı öneririz. Kısa sürede yapılacak organizasyonlar için de iletişime geçebilirsiniz; elimizden geleni yaparız.',
  },
  {
    soru: 'Hangi bölgelere hizmet veriyorsunuz?',
    cevap:
      'Bergama merkezli olarak hizmet vermekteyiz. Dikili, Kınık, Kozak Yaylası, Soma, Aliağa, Ayvalık, Akhisar ve çevre ilçeler dahil İzmir ile Manisa\'nın geniş bir coğrafyasında organizasyon gerçekleştiriyoruz.',
  },
  {
    soru: 'Fiyatlar nasıl belirleniyor?',
    cevap:
      'Fiyatlandırma; organizasyon türüne, seçilen hizmetlere, mekan büyüklüğüne ve tarihe göre değişiklik göstermektedir. Size özel teklif almak için WhatsApp üzerinden ya da iletişim formumuzdan bize ulaşabilirsiniz.',
  },
  {
    soru: 'Tarih değişikliği veya iptal yapabilir miyim?',
    cevap:
      'Tarih değişikliği talebinizi mümkün olan en erken sürede iletmenizi rica ederiz. Uygunluk durumuna göre yeni tarihinizi rezerve etmeye çalışırız. İptal koşulları sözleşmede belirtilmektedir.',
  },
  {
    soru: 'Fotoğraf ve video hizmeti organizasyon paketiyle birlikte mi geliyor?',
    cevap:
      'Fotoğraf, video ve drone çekimi ayrı bir hizmet olarak sunulmaktadır. Organizasyon paketiyle birlikte alındığında özel fiyatlandırma uygulanmaktadır. Detaylar için bizimle iletişime geçebilirsiniz.',
  },
  {
    soru: 'Kaç kişilik organizasyonlara hizmet veriyorsunuz?',
    cevap:
      'Küçük aile buluşmalarından büyük düğün törenlerine kadar her ölçekte organizasyon yapıyoruz. Kişi sayısı ne olursa olsun size en uygun çözümü birlikte planlayabiliriz.',
  },
  {
    soru: 'Dekorasyon malzemeleri sizde mi?',
    cevap:
      'Evet, geniş bir dekorasyon ve aksesuar envanterimiz mevcuttur. Balon, çiçek, masa düzeni, ışıklandırma ve konsept ürünleri kendi stoğumuzdan sağlıyoruz. Özel talepler için tedarik desteği de sunabiliyoruz.',
  },
  {
    soru: 'Organizasyon günü sizinle nasıl iletişim kurabilirim?',
    cevap:
      'Etkinlik günü ekibimiz sahada olacaktır. Ayrıca koordinatör arkadaşımızın iletişim bilgisini önceden paylaşıyoruz; herhangi bir konuda anında ulaşabilirsiniz.',
  },
  {
    soru: 'Ödeme nasıl yapılıyor, peşin mi gerekiyor?',
    cevap:
      'Rezervasyon sırasında belirli bir kapora alınmaktadır. Kalan tutar organizasyon öncesinde veya karşılıklı anlaşılan tarihe göre tamamlanmaktadır.',
  },
  {
    soru: 'Kendi konseptimi getirip uygulayabilir misiniz?',
    cevap:
      'Kesinlikle! Hayalinizdeki konsepti, referans görsellerinizi veya fikirlerinizi bizimle paylaşmanız yeterli. Ekibimiz, isteklerinizi hayata geçirmek için sizinle birlikte çalışır.',
  },
];

export default function SSSPage() {
  const [acik, setAcik] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-dima-cream/50">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/gallery/assets/sss-hero.webp')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-serif text-4xl font-light text-white drop-shadow-lg sm:text-5xl md:text-6xl">
              Sık Sorulan Sorular
            </h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-gold-300/90 sm:text-base">
              Merak Ettikleriniz
            </p>
          </div>
        </div>
      </section>

      {/* SSS Listesi */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {SSS.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gold-200/40 bg-white shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setAcik(acik === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-gold-50/50"
                aria-expanded={acik === index}
              >
                <span className="font-serif text-base font-semibold text-gray-800 sm:text-lg">
                  {item.soru}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-gold-500 transition-transform duration-300 ${
                    acik === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  acik === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-dima-grey leading-relaxed">
                  {item.cevap}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      <YeniKonseptBanner />

      {/* Alt CTA */}
      <section className="border-t border-gold-200/30 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-gray-800 sm:text-4xl">
            Başka sorunuz mu var?
          </h2>
          <p className="mt-4 text-lg text-dima-grey">
            Aklınızdaki her şeyi sormaktan çekinmeyin.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <TeklifAlButton className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4" />
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full border-2 border-gold-500 px-8 py-4 text-lg font-semibold text-gold-600 transition-all duration-300 hover:bg-gold-50 hover:scale-105 hover:shadow-lg"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
