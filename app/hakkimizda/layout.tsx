import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | Dima Dizayn & Organizasyon',
  description: '2021\'den beri Bergama\'da düğün, nişan, kına ve sünnet organizasyonları düzenliyoruz. Profesyonel ekibimiz ve özgün konseptlerimizle tanışın.',
  openGraph: {
    title: 'Hakkımızda | Dima Dizayn & Organizasyon',
    description: '2021\'den beri Bergama\'da düğün, nişan, kına ve sünnet organizasyonları düzenliyoruz. Profesyonel ekibimiz ve özgün konseptlerimizle tanışın.',
    url: 'https://dimadizayn.com/hakkimizda',
    images: [
      {
        url: 'https://dimadizayn.com/gallery/assets/about-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Dima Dizayn & Organizasyon - Hakkımızda',
      },
    ],
  },
};

export default function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
