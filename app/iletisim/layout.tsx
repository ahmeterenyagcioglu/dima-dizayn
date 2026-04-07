import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | Dima Dizayn & Organizasyon',
  description: 'Bergama organizasyon hizmetlerimiz için bizimle iletişime geçin. WhatsApp, telefon veya form aracılığıyla size özel teklif alın.',
  openGraph: {
    title: 'İletişim | Dima Dizayn & Organizasyon',
    description: 'Bergama organizasyon hizmetlerimiz için bizimle iletişime geçin. WhatsApp, telefon veya form aracılığıyla size özel teklif alın.',
    url: 'https://dimadizayn.com/iletisim',
    images: [
      {
        url: 'https://dimadizayn.com/gallery/assets/contact-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Dima Dizayn & Organizasyon - İletişim',
      },
    ],
  },
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return children;
}
