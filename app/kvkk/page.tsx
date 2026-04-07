export default function KVKKPage() {
  return (
    <div className="min-h-screen bg-dima-cream/50">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/gallery/assets/kvkk-hero.webp')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-serif text-3xl font-light text-white drop-shadow-lg sm:text-4xl md:text-5xl">
              Gizlilik Politikası & KVKK
            </h1>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-10 rounded-xl border border-gold-200/40 bg-white p-8 shadow-sm sm:p-10">

          <div>
            <h2 className="font-serif text-xl font-semibold text-gray-800">1. Veri Sorumlusu</h2>
            <p className="mt-3 text-dima-grey leading-relaxed">
              Bu web sitesi, <strong>Dima Dizayn & Organizasyon</strong> (İşletme Sahibi: Ömer Faruk Yağcıoğlu,
              Ertuğrul Mah., İsmet İnönü Cd. No:36, 35700 Bergama/İzmir) tarafından işletilmektedir.
              6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatını taşımaktayız.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-gray-800">2. Toplanan Veriler</h2>
            <p className="mt-3 text-dima-grey leading-relaxed">
              İletişim formumuz aracılığıyla aşağıdaki kişisel veriler toplanmaktadır:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-dima-grey">
              <li>Ad ve Soyad</li>
              <li>Telefon numarası</li>
              <li>E-posta adresi (isteğe bağlı)</li>
              <li>Organizasyon türü ve tahmini tarih</li>
              <li>Mesaj içeriği</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-gray-800">3. Verilerin İşlenme Amacı</h2>
            <p className="mt-3 text-dima-grey leading-relaxed">
              Toplanan kişisel veriler yalnızca aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-dima-grey">
              <li>Organizasyon taleplerinizi değerlendirmek ve geri dönüş sağlamak</li>
              <li>Hizmetlerimiz hakkında bilgi vermek</li>
              <li>Randevu ve rezervasyon süreçlerini yönetmek</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-gray-800">4. Verilerin Saklanması ve Paylaşımı</h2>
            <p className="mt-3 text-dima-grey leading-relaxed">
              Form aracılığıyla iletilen veriler, Formspree hizmeti üzerinden e-posta olarak tarafımıza ulaşmakta
              ve üçüncü kişilerle paylaşılmamaktadır. Verileriniz, yasal yükümlülükler gerektirmedikçe yalnızca
              talebin yanıtlanması için gerekli süre boyunca saklanmaktadır.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-gray-800">5. Çerezler (Cookie)</h2>
            <p className="mt-3 text-dima-grey leading-relaxed">
              Bu web sitesi temel işlevsellik için zorunlu çerezler kullanabilmektedir. Analitik veya
              pazarlama amaçlı çerez kullanılmamaktadır.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-gray-800">6. Haklarınız</h2>
            <p className="mt-3 text-dima-grey leading-relaxed">
              KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-dima-grey">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
              <li>Verilerin silinmesini veya yok edilmesini talep etme</li>
              <li>İşlemenin amacı dışında kullanıldığını düşünüyorsanız itiraz etme</li>
            </ul>
            <p className="mt-3 text-dima-grey leading-relaxed">
              Bu haklarınızı kullanmak için{' '}
              <a href="mailto:bilgi@dimadizayn.com" className="text-gold-600 underline hover:text-gold-700">
                bilgi@dimadizayn.com
              </a>{' '}
              adresine e-posta gönderebilirsiniz.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-gray-800">7. Güncellemeler</h2>
            <p className="mt-3 text-dima-grey leading-relaxed">
              Bu gizlilik politikası gerektiğinde güncellenebilir. Güncel metin her zaman bu sayfada
              yayımlanmaktadır. Son güncelleme: <strong>Nisan 2026</strong>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
