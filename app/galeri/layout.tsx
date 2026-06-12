import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kına, Nişan & Düğün Fotoğraf Galerisi | Dima Dizayn Bergama',
  description: 'Bergama kına, nişan, düğün ve sünnet organizasyonlarından özel anlar. Özgün konsept tasarımlarımızı keşfedin, hayalinizdeki organizasyonu planlayın.',
  keywords: 'bergama kına fotoğrafları, bergama nişan galeri, bergama düğün organizasyon fotoğraf, bergama sünnet organizasyon, dima dizayn galeri',
  openGraph: {
    title: 'Kına, Nişan & Düğün Fotoğraf Galerisi | Dima Dizayn Bergama',
    description: 'Bergama kına, nişan, düğün ve sünnet organizasyonlarından özel anlar. Özgün konsept tasarımlarımızı keşfedin.',
    url: 'https://dimadizayn.com/galeri',
    images: [{ url: 'https://dimadizayn.com/gallery/assets/hero.webp', width: 1200, height: 630, alt: 'Dima Dizayn Bergama Organizasyon Galeri' }],
  },
};

export default function GaleriLayout({ children }: { children: React.ReactNode }) {
  return children;
}
