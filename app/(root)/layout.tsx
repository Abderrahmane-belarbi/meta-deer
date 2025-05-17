import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/Header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
