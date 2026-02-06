import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dimadizayn.com'),
  title: 'Dima Dizayn & Organizasyon | Bergama Organizasyon Firması',
  description: 'Bergama kına gecesi, nişan, düğün ve sünnet organizasyonlarında eşsiz tasarımlar. Profesyonel ekibimizle hayalinizdeki organizasyonu gerçeğe dönüştürün.',
  keywords: 'bergama organizasyon, bergama kına gecesi, bergama nişan organizasyon, bergama sünnet organizasyon, bergama düğün, bergama kameraman, dima dizayn, izmir organizasyon',
  openGraph: {
    title: 'Dima Dizayn & Organizasyon | Bergama Organizasyon Firması',
    description: 'Bergama kına gecesi, nişan, düğün ve sünnet organizasyonlarında eşsiz tasarımlar. Profesyonel ekibimizle hayalinizdeki organizasyonu gerçeğe dönüştürün.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://dimadizayn.com',
    siteName: 'Dima Dizayn & Organizasyon',
    images: [
      {
        url: 'https://dimadizayn.com/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Dima Dizayn & Organizasyon - Bergama Organizasyon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dima Dizayn & Organizasyon | Bergama Organizasyon Firması',
    description: 'Bergama kına gecesi, nişan, düğün ve sünnet organizasyonlarında eşsiz tasarımlar.',
    images: ['https://dimadizayn.com/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'UYYkUnQ81AE42fT4X9KVt8ZcILYB-r0beoy974HyvsI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dima Dizayn & Organizasyon",
              "description": "Bergama kına gecesi, nişan, düğün ve sünnet organizasyonlarında eşsiz tasarımlar. Profesyonel ekibimizle hayalinizdeki organizasyonu gerçeğe dönüştürün.",
              "url": "https://dimadizayn.com",
              "telephone": "+90-535-367-99-31",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ertuğrul Mah., İsmet İnönü Cd. No:36",
                "addressLocality": "Bergama",
                "addressRegion": "İzmir",
                "postalCode": "35700",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.1167,
                "longitude": 27.1785
              },
              "openingHours": "Mo-Sa 10:30-17:00",
              "sameAs": [
                "https://instagram.com/dimadzyn",
                "https://www.facebook.com/dimadizaynn",
                "https://www.youtube.com/@dimadizayn",
                "https://www.tiktok.com/@dimadizayn"
              ],
              "priceRange": "$$",
              "servesCuisine": "Organizasyon Hizmetleri",
              "image": "https://dimadizayn.com/hero.webp",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "19",
                "bestRating": "5",
                "worstRating": "1"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
