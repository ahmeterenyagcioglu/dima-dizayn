import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Dima Dizayn & Organizasyon',
  description: 'Bergama\'da düğün, nişan, kına, sünnet organizasyonu, fotoğraf & video çekimi, müzik ve nedime hizmetleri. Hayalinizdeki organizasyon için bize ulaşın.',
  openGraph: {
    title: 'Hizmetlerimiz | Dima Dizayn & Organizasyon',
    description: 'Bergama\'da düğün, nişan, kına, sünnet organizasyonu, fotoğraf & video çekimi, müzik ve nedime hizmetleri. Hayalinizdeki organizasyon için bize ulaşın.',
    url: 'https://dimadizayn.com/hizmetlerimiz',
    images: [
      {
        url: 'https://dimadizayn.com/gallery/assets/hizmetler-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Dima Dizayn & Organizasyon - Hizmetlerimiz',
      },
    ],
  },
};

export default function HizmetlerimizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
