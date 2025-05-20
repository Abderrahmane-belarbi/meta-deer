import type { Metadata } from 'next';
import './globals.css';
import { EdgeStoreProvider } from '../lib/edgestore';

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
      <body>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </html>
  );
}
