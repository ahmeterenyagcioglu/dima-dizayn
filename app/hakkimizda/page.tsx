'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function HakkimizdaPage() {
  // Müşteri yorumları
  const [comments, setComments] = useState([
    {
      name: "Emine Ü.",
      comment: "Hersey cok güzeldi hayalimdeki herseyi eksiksiz yaptıkları icin cok teşekkür ederim. Secil hanımın güler yüzü ve samimiyeti icin ayrica teşekkür ediyorum."
    },
    {
      name: "Önder H.",
      comment: "Çok memnun kaldık, güvenirlik ve kalite harikaydı,her zaman ilk seçeneğimiz oldunuz şimdiden teşekkürler."
    },
    {
      name: "Egehan Ü.",
      comment: "Ömer beye ilgisi alakası içşn teşekkür ediyoruz. Hayalimizdeki organizasyon ve müzik hizmetini bize sağladıkları için teşekkürler. Çok memnun kaldık tavsiye ederiz."
    },
    {
      name: "Erbiy A.",
      comment: "Yaptığınız organizasyon mükemmel ötesi emeğinize sağlık gelen misafirlerimizde ayriyetten teşekkür ediyor başarılarınızın devamını dilerim."
    },
    {
      name: "Şevval D.",
      comment: "Seçil Hanım bizimle çok iyi ilgilendi. Hayalimdeki konsepti hayata geçirdi. Her şey için teşekkür ederim."
    },
    {
      name: "Gamze B.",
      comment: "Tesekkür ederiz yaptığınız organizasyon muhteşemdi"
    },
    {
      name: "Mehtap S.",
      comment: "Gercekten muhtesemsiniz🙏🙏 …"
    },
    {
      name: "Ayşe Ü.",
      comment: "Tüm organizyonlarını çok beğeniyorum.Güler yüzlü hizmet ve anlayışlı tutumlularından dolayı çok teşekkür ederim."
    },
    {
      name: "Dinçer A.",
      comment: "Kaliteye ve güven e önem veriliyor teşekkürler iyi çalışmalar"
    },
    {
      name: "Hakan B.",
      comment: "Herşey için çok teşekkür ederim güzel organizasyondu."
    }
  ]);

  // Sayfa yüklendiğinde yorumları karıştır
  useEffect(() => {
    const shuffled = [...comments].sort(() => Math.random() - 0.5);
    setComments(shuffled);
  }, []); // Boş dependency array - sadece sayfa ilk yüklendiğinde çalışır

  return (
    <div className="min-h-screen bg-dima-cream/50">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        {/* Arka plan görseli */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/about-hero.webp')" }}
        />
        {/* Koyu overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gold çizgi üstte */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />
        
        {/* Başlık */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-serif text-4xl font-light text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
              Hakkımızda
            </h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-gold-300/90 sm:text-base">
              Dima Dizayn & Organizasyon
            </p>
          </div>
        </div>
      </section>

      {/* İki Sütunlu Alan */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Sol Taraf - Dikey Fotoğraf */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-gold-200/40 shadow-lg">
              <Image
                src="/about-vertical.webp"
                alt="Dima Dizayn - Organizasyon Hazırlığı"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Sağ Taraf - Vizyon Metni */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-semibold text-gray-800 sm:text-4xl">
              Vizyonumuz
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-dima-grey">
              2021 yılından beri İzmir Bergama'da özel günlerinizi unutulmaz anılara dönüştürüyoruz. 
              Düğün, nişan, kına ve sünnet gibi en değerli anlarınızda, hayallerinizdeki organizasyonu 
              profesyonel ekibimizle hayata geçiriyoruz.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-dima-grey">
              Her bir organizasyonu, sizin hikayenizin bir parçası olarak görüyor. Kişiye özel tasarımlarımız, 
              detaylara olan hassasiyetimiz ve yaratıcı yaklaşımımızla, gününüzü kusursuz kılıyoruz.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-dima-grey">
              Bergama merkezli bir firma olarak, Ege'nin dokusunu organizasyonlarımıza yansıtıyoruz. Sadece şehir merkezinde değil; Dikili'nin sahil düğünlerinden Kozak'ın doğal köy nişanlarına kadar geniş bir coğrafyada hizmet veriyoruz. Bergama, Aliağa ve Ayvalık çevresindeki tüm ilçe ve köylerde, yerel ihtiyaçları bilerek ve her konsepte uyum sağlayarak mutluluğunuza ortak oluyoruz.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-dima-grey">
              Misyonumuz, sadece bir organizasyon şirketi olmak değil, en mutlu anlarınızda 
              güvenilir bir yol arkadaşınız olmaktır.
            </p>
          </div>
        </div>
      </section>

      {/* İstatistikler Bölümü */}
      <section className="border-t border-gold-200/30 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
            {/* 500+ Mutlu Müşteri */}
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-gold-600 sm:text-5xl lg:text-6xl">
                500+
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600 sm:text-base lg:text-lg">
                Mutlu Müşteri
              </p>
            </div>

            {/* 5+ Yıl Deneyim */}
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-gold-600 sm:text-5xl lg:text-6xl">
                5+
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600 sm:text-base lg:text-lg">
                Yıl Deneyim
              </p>
            </div>

            {/* 200+ Başarılı Organizasyon */}
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-gold-600 sm:text-5xl lg:text-6xl">
                200+
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600 sm:text-base lg:text-lg">
                Başarılı Organizasyon
              </p>
            </div>

            {/* 40+ Özgün Konsept */}
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-gold-600 sm:text-5xl lg:text-6xl">
                40+
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600 sm:text-base lg:text-lg">
                Özgün Konsept
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz? */}
      <section className="border-t border-gold-200/30 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-center text-gray-800 sm:text-4xl">
            Neden Biz?
          </h2>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:gap-12">
            {/* Kişiye Özel Tasarım */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 sm:h-20 sm:w-20">
                <svg className="h-8 w-8 text-gold-600 sm:h-10 sm:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-800">Kişiye Özel Tasarım</h3>
              <p className="mt-3 text-sm text-dima-grey leading-relaxed">
                Her müşterimizin hikayesini dinliyor, hayallerine uygun konseptler tasarlıyoruz. 
                Benzersiz anlar için kişiselleştirilmiş çözümler sunuyoruz.
              </p>
            </div>

            {/* Profesyonel Ekip */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 sm:h-20 sm:w-20">
                <svg className="h-8 w-8 text-gold-600 sm:h-10 sm:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-800">Profesyonel Ekip</h3>
              <p className="mt-3 text-sm text-dima-grey leading-relaxed">
                Uzman organizasyoncular, fotoğrafçılar ve müzik ekiplerimizle birlikte çalışıyoruz. 
                Her alanda deneyimli profesyonellerle hizmet veriyoruz.
              </p>
            </div>

            {/* Unutulmaz Anlar */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 sm:h-20 sm:w-20">
                <svg className="h-8 w-8 text-gold-600 sm:h-10 sm:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-800">Unutulmaz Anlar</h3>
              <p className="mt-3 text-sm text-dima-grey leading-relaxed">
                Detaylara gösterdiğimiz özen ve yaratıcı yaklaşımımızla, gününüzü 
                ömür boyu hatırlayacağınız unutulmaz anılara dönüştürüyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Müşterilerimizden Notlar */}
      <section className="border-t border-gold-200/30 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-center text-gray-800 sm:text-4xl">
            Müşterilerimizden Notlar
          </h2>
          
          {/* Swiper Slider */}
          <div className="mt-12 pb-16 px-12 md:px-16">
            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={1.2}
              grabCursor={true}
              simulateTouch={true}
              allowTouchMove={true}
              centeredSlides={false}
              navigation={true}
              breakpoints={{
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="testimonials-swiper"
            >
              {comments.map((comment, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gold-200/40 shadow-sm md:shadow-md flex flex-col h-full justify-between w-full">
                    <div className="flex items-start space-x-3 flex-1">
                      {/* Avatar */}
                      <div className="flex-shrink-0 w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                        <span className="text-gold-600 font-semibold text-lg">
                          {comment.name.charAt(0)}
                        </span>
                      </div>
                      
                      {/* İçerik */}
                      <div className="flex-1 min-w-0 flex flex-col">
                        {/* Quote Icon */}
                        <Quote className="h-5 w-5 text-gold-400 mb-2" />
                        
                        {/* Yorum */}
                        <p className="text-sm text-gray-700 leading-relaxed flex-1">
                          "{comment.comment}"
                        </p>
                        
                        {/* Footer Alanı - Name & Stars */}
                        <div className="mt-auto pt-4">
                          {/* İsim */}
                          <p className="text-sm font-medium text-gray-900 mb-2">
                            {comment.name}
                          </p>
                          
                          {/* 5 Yıldız */}
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gold-200/30 bg-dima-cream/50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-gray-800 sm:text-4xl">
            Bizimle Tanışın
          </h2>
          <p className="mt-4 text-lg text-dima-grey">
            Özel gününüzü unutulmaz kılmak için sizinle tanışmayı bekliyoruz.
          </p>
          <div className="mt-8">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-lg border border-gold-400 bg-gold-400 px-8 py-3 text-base font-medium text-white transition-all hover:bg-gold-500 hover:border-gold-500 hover:shadow-lg sm:px-10 sm:py-4 sm:text-lg"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      {/* Swiper Navigation Styles */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
          background: rgba(251, 191, 36, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(245, 158, 11, 0.9);
          transform: scale(1.1);
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }

        .testimonials-swiper {
          padding: 0 0px;
        }

        .testimonials-swiper .swiper-slide {
          opacity: 1;
          transition: none;
        }

        .testimonials-swiper .swiper-slide-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
