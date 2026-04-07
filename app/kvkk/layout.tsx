import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KVKK & Gizlilik Politikası | Dima Dizayn',
  description: 'Dima Dizayn kişisel verilerin korunması ve gizlilik politikası.',
  robots: { index: false, follow: false },
};

export default function KVKKLayout({ children }: { children: React.ReactNode }) {
  return children;
}
