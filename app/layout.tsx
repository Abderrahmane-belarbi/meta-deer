import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'META DEER',
  description: 'Best Wood Place Ever',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
