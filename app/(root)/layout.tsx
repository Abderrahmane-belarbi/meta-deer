import '../globals.css';
import Header from '@/components/Header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full'>
      <Header />
      <main className='w-full'>{children}</main>
    </div>
  );
}
