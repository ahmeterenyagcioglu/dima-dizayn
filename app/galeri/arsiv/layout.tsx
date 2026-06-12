import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geçmiş Çalışmalarımız | Aylık Arşiv — Dima Dizayn Bergama',
  description: 'Dima Dizayn\'ın aylık organizasyon arşivi. Geçmiş dönemlerde gerçekleştirdiğimiz kına, nişan, düğün ve sünnet organizasyonlarına göz atın.',
  keywords: 'bergama organizasyon arşiv, dima dizayn geçmiş çalışmalar, bergama düğün arşiv',
  openGraph: {
    title: 'Geçmiş Çalışmalarımız | Aylık Arşiv — Dima Dizayn Bergama',
    description: 'Dima Dizayn\'ın aylık organizasyon arşivi. Kına, nişan, düğün ve sünnet çalışmalarımıza göz atın.',
    url: 'https://dimadizayn.com/galeri/arsiv',
    images: [{ url: 'https://dimadizayn.com/gallery/assets/hero.webp', width: 1200, height: 630, alt: 'Dima Dizayn Organizasyon Arşivi' }],
  },
};

export default function ArsivLayout({ children }: { children: React.ReactNode }) {
  return children;
}
