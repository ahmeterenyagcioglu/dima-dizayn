import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeri | Dima Dizayn & Organizasyon',
  description: 'Bergama düğün, nişan, kına ve sünnet organizasyonlarımızdan fotoğraflar. Özgün konseptlerimizi ve detaylı dekorasyonlarımızı keşfedin.',
  openGraph: {
    title: 'Galeri | Dima Dizayn & Organizasyon',
    description: 'Bergama düğün, nişan, kına ve sünnet organizasyonlarımızdan fotoğraflar. Özgün konseptlerimizi ve detaylı dekorasyonlarımızı keşfedin.',
    url: 'https://dimadizayn.com/galeri',
    images: [
      {
        url: 'https://dimadizayn.com/gallery/assets/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Dima Dizayn & Organizasyon - Galeri',
      },
    ],
  },
};

export default function GaleriLayout({ children }: { children: React.ReactNode }) {
  return children;
}
