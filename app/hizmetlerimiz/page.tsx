'use client';

import Link from 'next/link';
import { 
  Heart, 
  Music, 
  Gift, 
  Camera, 
  Palette, 
  Armchair, 
  Trees, 
  Video, 
  Sparkles,
  MapPin
} from 'lucide-react';

const hizmetler = [
  {
    icon: Heart,
    title: 'Düğün & Nişan Organizasyonu',
    description: 'Hayallerinizdeki konseptlerle unutulmaz bir başlangıç.',
    color: 'text-rose-500'
  },
  {
    icon: Gift,
    title: 'Kına & Sünnet Organizasyonu',
    description: 'Geleneksel ve modern dokunuşların buluştuğu özel geceler.',
    color: 'text-purple-500'
  },
  {
    icon: Camera,
    title: 'Fotoğraf, Video & Drone Çekimi',
    description: 'En değerli anlarınızı havadan ve karadan ölümsüzleştiriyoruz.',
    color: 'text-green-500'
  },
  {
    icon: Music,
    title: 'DJ & Orkestra',
    description: 'En mutlu anlarınıza ritim katacak profesyonel müzik hizmeti.',
    color: 'text-blue-500'
  },
  {
    icon: Palette,
    title: 'Konsept Kurulumu & Dekorasyon',
    description: 'Mekana özel tasarımlar ve estetik dokunuşlar.',
    color: 'text-orange-500'
  },
  {
    icon: Trees,
    title: 'Dış Çekim & Albüm Hazırlama',
    description: 'Doğanın içinde en doğal ve şık pozlarınızla size özel albümler.',
    color: 'text-emerald-500'
  },
  {
    icon: Gift,
    title: 'Doğum Günü & Özel Kutlamalar',
    description: 'Her yaşa ve temaya uygun neşeli kutlamalar.',
    color: 'text-pink-500'
  },
  {
    icon: Armchair,
    title: 'Sandalye & Masa Giydirme',
    description: 'Etkinliğinizin havasını değiştiren şık kumaş ve aksesuar seçenekleri.',
    color: 'text-indigo-500'
  },
  {
    icon: MapPin,
    title: 'Giriş Yolu Kurulumu',
    description: 'Misafirlerinizi karşıladığınız o ilk anı, şık gelin yolları ve dekoratif giriş üniteleriyle büyüleyici hale getiriyoruz.',
    color: 'text-emerald-500'
  },
  {
    icon: Heart,
    title: 'Nedime Hizmeti',
    description: 'En özel gününüzde her detayla ilgilenen, yanınızdan ayrılmayan profesyonel nedime ekibimiz.',
    color: 'text-rose-500'
  },
  {
    icon: Sparkles,
    title: 'Palyaço Hizmeti',
    description: 'Çocuklar için eğlenceli aktiviteler, yüz boyama ve oyunlarla dolu unutulmaz anlar.',
    color: 'text-yellow-500'
  },
  {
    icon: Video,
    title: 'Klip Hazırlama',
    description: 'Özel günlerinizden geriye kalan en güzel hikaye videoları.',
    color: 'text-red-500'
  }
];

export default function HizmetlerimizPage() {
  return (
    <div className="min-h-screen bg-dima-cream/50">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        {/* Arka plan görseli */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hizmetler-hero.webp')" }}
        />
        {/* Koyu overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gold çizgi üstte */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />
        
        {/* Başlık */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-serif text-4xl font-light text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
              Hizmetlerimiz
            </h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-gold-300/90 sm:text-base">
              Hayallerinizi Gerçeğe Dönüştürüyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Hizmet Kartları */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {hizmetler.map((hizmet, index) => {
            const Icon = hizmet.icon;
            return (
              <div
                key={index}
                className="group rounded-xl border border-gold-200/40 bg-white p-8 shadow-sm transition-all duration-300 hover:scale-105 hover:border-gold-400/60 hover:shadow-lg"
              >
                {/* İkon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100">
                  <Icon className={`h-8 w-8 ${hizmet.color}`} />
                </div>
                
                {/* Başlık */}
                <h3 className="mb-3 font-serif text-xl font-semibold text-gray-800 group-hover:text-gold-600 transition-colors">
                  {hizmet.title}
                </h3>
                
                {/* Açıklama */}
                <p className="text-dima-grey leading-relaxed">
                  {hizmet.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gold-50 to-gold-100/50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-light text-gray-800 sm:text-4xl">
            Kendi Konseptinizi Oluşturmak İçin
          </h2>
          <p className="mt-4 text-lg text-dima-grey">
            Bizimle İletişime Geçin
          </p>
          <Link
            href="/iletisim"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-gold-600 hover:scale-105 hover:shadow-lg"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </div>
  );
}
