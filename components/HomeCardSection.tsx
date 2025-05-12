import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

type HomeCardSectionProps = {
  title: string;
  text: string;
  image: string;
  buttonText?: string;
  buttonUrl?: string;
};

export default function HomeCardSection({
  title,
  text,
  image,
  buttonText = 'Explore Now',
  buttonUrl = '#',
}: HomeCardSectionProps) {
  return (
    <div className='my-6 py-12 bg-gray-100'>
      <div className='max-w-[900px] m-auto flex flex-col items-center gap-6'>
        <div className=' flex flex-col items-center'>
          <p
            className='text-gray-700 text-center text-2xl'
            style={{ fontFamily: 'var(--font-alegreya)' }}
          >
            {title}
          </p>
          <div className='mt-2 h-[1px] w-20 bg-[#f7750c]'></div>
        </div>
        <p className='text-sm text-center text-gray-400'>{text}</p>
        <Image src={image} width={900} height={500} alt={title} />
        <Link href={buttonUrl}>
          <Button className='uppercase rounded-r-sm cursor-pointer bg-[#f7750c] w-fit'>
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
