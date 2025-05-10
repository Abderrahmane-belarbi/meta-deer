import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

const mreaves = localFont({
  src: './fonts/mreaves.ttf',
  display: 'swap',
  variable: '--font-mreaves',
});
const roboto = localFont({
  src: './fonts/Roboto.ttf',
  display: 'swap',
  variable: '--font-roboto',
});
const comfortaa = localFont({
  src: './fonts/Comfortaa.ttf',
  display: 'swap',
  variable: '--font-comfortaa',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'], // 400 = regular (Ladder), 600 = semi-bold (Urban)
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'META DEER',
  description: 'Best Wood Place Ever',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${mreaves.variable} ${roboto.variable} ${comfortaa.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
