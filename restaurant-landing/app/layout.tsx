import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Café Đà Nẵng — A slow cup, by the river',
  description: 'Specialty beans, hand-roasted in Hải Châu, brewed slow, served slower. Café Đà Nẵng is a small neighbourhood roastery and coffeehouse.',
  openGraph: {
    title: 'Café Đà Nẵng',
    description: 'Specialty beans, hand-roasted in Hải Châu.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
