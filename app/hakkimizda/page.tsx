import Link from 'next/link';
import Image from 'next/image';

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-dima-cream/50">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        {/* Arka plan görseli */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/about-hero.jpg')" }}
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
                src="/about-vertical.jpg"
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
              2010 yılından beri İzmir Bergama'da özel günlerinizi unutulmaz anılara dönüştürüyoruz. 
              Düğün, nişan, kına ve sünnet gibi en değerli anlarınızda, hayallerinizdeki organizasyonu 
              profesyonel ekibimizle hayata geçiriyoruz.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-dima-grey">
              Her bir organizasyonu, sizin hikayenizin bir parçası olarak görüyor. Kişiye özel tasarımlarımız, 
              detaylara olan hassasiyetimiz ve yaratıcı yaklaşımımızla, gününüzü kusursuz kılıyoruz.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-dima-grey">
              Misyonumuz, sadece bir organizasyon şirketi olmak değil, en mutlu anlarınızda 
              güvenilir bir yol arkadaşınız olmaktır.
            </p>
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
    </div>
  );
}
