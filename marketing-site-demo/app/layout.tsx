import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import { Nav, Footer } from './components/chrome';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Stillwater Yoga Studio — Da Nang',
    template: '%s · Stillwater Yoga'
  },
  description:
    'A riverside yoga studio in Da Nang. Vinyasa, yin, and breathwork classes for every level. Book your first class.',
  openGraph: {
    title: 'Stillwater Yoga Studio',
    description: 'A riverside yoga studio in Da Nang — classes for every level.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
