'use client';

import { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const RAW_COMMENTS = [
  { name: 'Emine Ü.', comment: 'Hersey cok güzeldi hayalimdeki herseyi eksiksiz yaptıkları icin cok teşekkür ederim. Secil hanımın güler yüzü ve samimiyeti icin ayrica teşekkür ediyorum.' },
  { name: 'Önder H.', comment: 'Çok memnun kaldık, güvenirlik ve kalite harikaydı,her zaman ilk seçeneğimiz oldunuz şimdiden teşekkürler.' },
  { name: 'Egehan Ü.', comment: 'Ömer beye ilgisi alakası içşn teşekkür ediyoruz. Hayalimizdeki organizasyon ve müzik hizmetini bize sağladıkları için teşekkürler. Çok memnun kaldık tavsiye ederiz.' },
  { name: 'Erbiy A.', comment: 'Yaptığınız organizasyon mükemmel ötesi emeğinize sağlık gelen misafirlerimizde ayriyetten teşekkür ediyor başarılarınızın devamını dilerim.' },
  { name: 'Şevval D.', comment: 'Seçil Hanım bizimle çok iyi ilgilendi. Hayalimdeki konsepti hayata geçirdi. Her şey için teşekkür ederim.' },
  { name: 'Gamze B.', comment: 'Tesekkür ederiz yaptığınız organizasyon muhteşemdi' },
  { name: 'Mehtap S.', comment: 'Gercekten muhtesemsiniz🙏🙏 …' },
  { name: 'Ayşe Ü.', comment: 'Tüm organizyonlarını çok beğeniyorum.Güler yüzlü hizmet ve anlayışlı tutumlularından dolayı çok teşekkür ederim.' },
  { name: 'Dinçer A.', comment: 'Kaliteye ve güven e önem veriliyor teşekkürler iyi çalışmalar' },
  { name: 'Hakan B.', comment: 'Herşey için çok teşekkür ederim güzel organizasyondu.' },
];

export default function TestimonialsSlider() {
  const [comments, setComments] = useState(RAW_COMMENTS);

  useEffect(() => {
    setComments([...RAW_COMMENTS].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <>
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
            768: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="testimonials-swiper"
        >
          {comments.map((comment, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 rounded-lg p-6 border border-gold-200/40 shadow-sm md:shadow-md flex flex-col h-full justify-between w-full">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                    <span className="text-gold-600 font-semibold text-lg">{comment.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <Quote className="h-5 w-5 text-gold-400 mb-2" />
                    <p className="text-sm text-gray-700 leading-relaxed flex-1">"{comment.comment}"</p>
                    <div className="mt-auto pt-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">{comment.name}</p>
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

      <style jsx global>{`
        .swiper-button-prev, .swiper-button-next {
          color: white;
          background: rgba(251, 191, 36, 0.8);
          width: 40px; height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        .swiper-button-prev:hover, .swiper-button-next:hover {
          background: rgba(245, 158, 11, 0.9);
          transform: scale(1.1);
        }
        .swiper-button-prev::after, .swiper-button-next::after { display: none; }
        .testimonials-swiper { padding: 0 0px; }
        .testimonials-swiper .swiper-slide { opacity: 1; transition: none; }
        .testimonials-swiper .swiper-slide-active { opacity: 1; }
      `}</style>
    </>
  );
}
