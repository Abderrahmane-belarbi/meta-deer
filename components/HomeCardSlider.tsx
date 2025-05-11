'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

type ItemsType = {
  key: string;
  image: string;
  url: string;
  title: string;
}[];

export default function HomeCardSlier({
  title,
  items,
}: {
  title?: string;
  items: ItemsType;
}) {
  return (
    <div className='w-full flex flex-col items-center justify-center py-4'>
      <p
        className='text-gray-700 text-center text-2xl'
        style={{ fontFamily: 'var(--font-alegreya)' }}
      >
        {title}
      </p>
      <Carousel
        className='w-full'
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent className='gap-4 items-center justify-center'>
          {items.map((item) => (
            <CarouselItem key={item.key} className='md:basis-1/3 lg:basis-1/5'>
              <div className='flex flex-col gap-4'>
                <Image
                  className='hover:scale-107 duration-300'
                  src={item.image}
                  width={300}
                  height={300}
                  alt={item.title}
                />
                <p className='text-center uppercase'>{item.title}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* CarouselPrevious and CarouselNext are buttons that can be used to navigate the carousel and left-0 and right-0 are used to position the buttons on the left and right side of the carousel */}
        <CarouselPrevious className='left-0' />
        <CarouselNext className='right-0' />
      </Carousel>
    </div>
  );
}
