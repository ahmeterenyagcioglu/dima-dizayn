import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teklif Alın & İletişim | Dima Dizayn Bergama Organizasyon',
  description: 'Bergama düğün, nişan ve kına organizasyonu için hızlı teklif alın. WhatsApp, telefon veya form ile ulaşın. Ertuğrul Mah., İsmet İnönü Cd. No:36, Bergama/İzmir.',
  keywords: 'bergama organizasyon teklif, dima dizayn iletişim, bergama organizasyon telefon, bergama düğün fiyat',
  openGraph: {
    title: 'Teklif Alın & İletişim | Dima Dizayn Bergama',
    description: 'Bergama organizasyon için hızlı teklif alın. WhatsApp, telefon veya form ile ulaşın.',
    url: 'https://dimadizayn.com/iletisim',
    images: [{ url: 'https://dimadizayn.com/gallery/assets/contact-hero.webp', width: 1200, height: 630, alt: 'Dima Dizayn İletişim Bergama' }],
  },
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return children;
}
