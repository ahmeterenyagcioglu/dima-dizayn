import GallerySection from '@/components/GallerySection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - tam ekran genişliğinde */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Yedek arka plan: Görsel yüklenmezse görünen gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)',
          }}
          aria-hidden
        />
        {/* Arka plan görseli - public/hero.jpg ekleyin */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.webp')" }}
          aria-hidden
        />
        {/* Koyu overlay - metnin okunabilirliği */}
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        {/* İnce gold çizgi üstte */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" aria-hidden />

        {/* Slogan */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-light tracking-wide text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            Dima Dizayn ile Hayallerinizi Organize Ediyoruz
          </h1>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-gold-300/90 sm:text-base">
            Düğün · Nişan · Kına · Sünnet
          </p>
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" className="border-t border-gold-200/30 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-gray-800 sm:text-3xl text-center">
            Hizmetlerimiz
          </h2>
          <p className="mt-3 text-center text-sm text-dima-grey max-w-2xl mx-auto">
            Düğün, nişan, kına ve sünnet gibi özel günlerinizi hayal ettiğiniz gibi organize ediyoruz.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gold-200/40 bg-dima-cream/50 p-6 text-center shadow-sm transition-shadow hover:shadow-md">
              <h3 className="font-serif text-lg font-semibold text-gray-800">Organizasyon</h3>
              <p className="mt-2 text-sm text-dima-grey">
                Mekan, dekorasyon ve program planlaması ile gününüzü sorunsuz yönetiyoruz.
              </p>
            </div>
            <div className="rounded-xl border border-gold-200/40 bg-dima-cream/50 p-6 text-center shadow-sm transition-shadow hover:shadow-md">
              <h3 className="font-serif text-lg font-semibold text-gray-800">Fotoğraf & Video</h3>
              <p className="mt-2 text-sm text-dima-grey">
                Anlarınızı profesyonel çekim ve kurgu ile ölümsüzleştiriyoruz.
              </p>
            </div>
            <div className="rounded-xl border border-gold-200/40 bg-dima-cream/50 p-6 text-center shadow-sm transition-shadow hover:shadow-md sm:col-span-2 lg:col-span-1">
              <h3 className="font-serif text-lg font-semibold text-gray-800">Müzik</h3>
              <p className="mt-2 text-sm text-dima-grey">
                DJ ve canlı müzik seçenekleriyle davetlilerinize unutulmaz bir atmosfer sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mutlu Anlardan Kareler - Grid Galeri (tıklayınca büyür) */}
      <GallerySection />

      {/* Konum */}
      <section id="konum" className="border-t border-gold-200/30 bg-dima-cream/50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-gray-800 sm:text-3xl">
            Konum
          </h2>
          <p className="mt-2 text-sm text-dima-grey">
            Ertuğrul, İsmet İnönü Cd. No:36, 35700 Bergama/İzmir
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-gold-200/40 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d773.8798689555857!2d27.178323369605618!3d39.117408898229876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9f905ec8b153d%3A0x5b8b877589f6c14c!2sDima%20Dizayn!5e0!3m2!1str!2str!4v1769797128971!5m2!1str!2str"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dima Dizayn konumu - Google Haritalar"
              className="h-[280px] w-full sm:h-[380px] md:h-[450px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
