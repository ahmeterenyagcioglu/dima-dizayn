import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular | Dima Dizayn & Organizasyon',
  description: 'Bergama organizasyon hizmetleri hakkında sık sorulan sorular: rezervasyon, fiyat, bölgeler, ödeme ve daha fazlası.',
  robots: { index: true, follow: true },
};

const FAQ_DATA = [
  { soru: 'Ne kadar önceden rezervasyon yapmalıyım?', cevap: 'Özellikle düğün ve nişan sezonunda takvimimiz hızlı dolmaktadır. Organizasyon tarihinizden en az 2–3 ay önce rezervasyon yaptırmanızı öneririz. Kısa sürede yapılacak organizasyonlar için de iletişime geçebilirsiniz; elimizden geleni yaparız.' },
  { soru: 'Hangi bölgelere hizmet veriyorsunuz?', cevap: 'Bergama merkezli olarak hizmet vermekteyiz. Dikili, Kınık, Kozak Yaylası, Soma, Aliağa, Ayvalık, Akhisar ve çevre ilçeler dahil İzmir ile Manisa\'nın geniş bir coğrafyasında organizasyon gerçekleştiriyoruz.' },
  { soru: 'Fiyatlar nasıl belirleniyor?', cevap: 'Fiyatlandırma; organizasyon türüne, seçilen hizmetlere, mekan büyüklüğüne ve tarihe göre değişiklik göstermektedir. Size özel teklif almak için WhatsApp üzerinden ya da iletişim formumuzdan bize ulaşabilirsiniz.' },
  { soru: 'Tarih değişikliği veya iptal yapabilir miyim?', cevap: 'Tarih değişikliği talebinizi mümkün olan en erken sürede iletmenizi rica ederiz. Uygunluk durumuna göre yeni tarihinizi rezerve etmeye çalışırız. İptal koşulları sözleşmede belirtilmektedir.' },
  { soru: 'Fotoğraf ve video hizmeti organizasyon paketiyle birlikte mi geliyor?', cevap: 'Fotoğraf, video ve drone çekimi ayrı bir hizmet olarak sunulmaktadır. Organizasyon paketiyle birlikte alındığında özel fiyatlandırma uygulanmaktadır. Detaylar için bizimle iletişime geçebilirsiniz.' },
  { soru: 'Kaç kişilik organizasyonlara hizmet veriyorsunuz?', cevap: 'Küçük aile buluşmalarından büyük düğün törenlerine kadar her ölçekte organizasyon yapıyoruz. Kişi sayısı ne olursa olsun size en uygun çözümü birlikte planlayabiliriz.' },
  { soru: 'Dekorasyon malzemeleri sizde mi?', cevap: 'Evet, geniş bir dekorasyon ve aksesuar envanterimiz mevcuttur. Balon, çiçek, masa düzeni, ışıklandırma ve konsept ürünleri kendi stoğumuzdan sağlıyoruz. Özel talepler için tedarik desteği de sunabiliyoruz.' },
  { soru: 'Organizasyon günü sizinle nasıl iletişim kurabilirim?', cevap: 'Etkinlik günü ekibimiz sahada olacaktır. Ayrıca koordinatör arkadaşımızın iletişim bilgisini önceden paylaşıyoruz; herhangi bir konuda anında ulaşabilirsiniz.' },
  { soru: 'Ödeme nasıl yapılıyor, peşin mi gerekiyor?', cevap: 'Rezervasyon sırasında belirli bir kapora alınmaktadır. Kalan tutar organizasyon öncesinde veya karşılıklı anlaşılan tarihe göre tamamlanmaktadır.' },
  { soru: 'Kendi konseptimi getirip uygulayabilir misiniz?', cevap: 'Kesinlikle! Hayalinizdeki konsepti, referans görsellerinizi veya fikirlerinizi bizimle paylaşmanız yeterli. Ekibimiz, isteklerinizi hayata geçirmek için sizinle birlikte çalışır.' },
];

export default function SSSLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_DATA.map((item) => ({
              '@type': 'Question',
              name: item.soru,
              acceptedAnswer: { '@type': 'Answer', text: item.cevap },
            })),
          }),
        }}
      />
      {children}
    </>
  );
}
