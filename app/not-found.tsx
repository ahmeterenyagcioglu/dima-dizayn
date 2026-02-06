import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dima-cream/50 flex items-center justify-center">
      <div className="text-center px-4">
        {/* 404 İkonu */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gold-100 sm:h-32 sm:w-32">
          <span className="text-gold-600 font-serif text-4xl font-bold sm:text-5xl">404</span>
        </div>
        
        {/* Başlık */}
        <h1 className="font-serif text-2xl font-semibold text-gray-800 sm:text-3xl md:text-4xl">
          Aradığınız Sayfa Organizasyon Dışı Kalmış!
        </h1>
        
        {/* Açıklama */}
        <p className="mt-4 text-dima-grey max-w-md mx-auto sm:text-lg">
          Görünüşe göre hayalinizdeki sayfaya şu an ulaşamıyoruz.
        </p>
        
        {/* Ana Sayfa Butonu */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-gold-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gold-500/50 sm:px-10"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
        
        {/* Ek Bilgi */}
        <div className="mt-12 text-sm text-dima-grey">
          <p>Aradığınızı bulamadıysanız, bizimle iletişime geçebilirsiniz:</p>
          <Link
            href="/iletisim"
            className="mt-2 inline-block font-medium text-gold-600 hover:text-gold-700 transition-colors"
          >
            İletişim Sayfası →
          </Link>
        </div>
      </div>
    </div>
  );
}
