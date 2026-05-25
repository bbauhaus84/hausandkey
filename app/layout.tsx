import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Haus & Key | Boutique Airbnb Co-Hosting',
  description: 'Premium short-term rental co-hosting for Airbnb and vacation rental owners. We optimize listings, manage guests, and maximize revenue with boutique hospitality service.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Haus & Key Co-Hosting',
    description: 'Boutique Airbnb co-hosting that increases bookings, improves guest experience, and protects your property.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}
