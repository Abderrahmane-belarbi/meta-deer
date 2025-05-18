import { categories } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeCategories() {
  return (
    <div>
      <div className='mt-16 mb-2 flex flex-col items-center'>
        <p
          className='text-gray-700 text-center text-2xl'
          style={{ fontFamily: 'var(--font-alegreya)' }}
        >
          Explore Our Furniture Range
        </p>
        <div className='mt-2 h-[1px] w-20 bg-[#f7750c]'></div>
      </div>
      <div className='max-w-[900px] m-auto py-4 flex flex-wrap justify-center gap-12'>
        {categories.map((item) => {
          return (
            <Link
              key={item.key}
              className='flex flex-col items-center justify-center'
              href={item.url}
            >
              <Image src={item.image} alt={item.title} width={60} height={60} />
              <p className='text-sm'>{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
