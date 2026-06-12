import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bergama Organizasyon Firması | Hakkımızda — Dima Dizayn',
  description: '2021\'den beri Bergama ve Ege Bölgesi\'nde düğün, nişan, kına ve sünnet organizasyonu hizmeti veriyoruz. 500+ mutlu müşteri, özgün konseptler, profesyonel ekip.',
  keywords: 'bergama organizasyon firması, dima dizayn hakkında, bergama düğün organizatörü, bergama organizasyon ekibi',
  openGraph: {
    title: 'Bergama Organizasyon Firması | Hakkımızda — Dima Dizayn',
    description: '2021\'den beri Bergama\'da düğün, nişan, kına ve sünnet organizasyonu. 500+ mutlu müşteri, özgün konseptler.',
    url: 'https://dimadizayn.com/hakkimizda',
    images: [{ url: 'https://dimadizayn.com/gallery/assets/about-hero.webp', width: 1200, height: 630, alt: 'Dima Dizayn Bergama Organizasyon Ekibi' }],
  },
};

export default function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
