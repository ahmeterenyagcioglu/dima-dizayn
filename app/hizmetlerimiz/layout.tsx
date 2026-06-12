import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Düğün, Nişan, Kına & Sünnet Organizasyonu | Hizmetlerimiz — Dima Dizayn Bergama',
  description: 'Düğün, nişan, kına, sünnet ve doğum günü organizasyonu; fotoğraf & video çekimi, DJ ve müzik, ışıklandırma hizmetleri. Bergama ve Ege Bölgesi genelinde.',
  keywords: 'bergama düğün organizasyonu, bergama nişan organizasyonu, bergama kına organizasyonu, bergama sünnet organizasyonu, bergama fotoğrafçı, bergama dj',
  openGraph: {
    title: 'Düğün, Nişan, Kına & Sünnet Organizasyonu | Dima Dizayn Bergama',
    description: 'Düğün, nişan, kına, sünnet organizasyonu; fotoğraf, video, müzik hizmetleri. Bergama ve Ege Bölgesi genelinde.',
    url: 'https://dimadizayn.com/hizmetlerimiz',
    images: [{ url: 'https://dimadizayn.com/gallery/assets/hizmetler-hero.webp', width: 1200, height: 630, alt: 'Dima Dizayn Bergama Organizasyon Hizmetleri' }],
  },
};

export default function HizmetlerimizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
