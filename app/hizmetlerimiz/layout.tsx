import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz'
};

export default function HizmetlerimizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
