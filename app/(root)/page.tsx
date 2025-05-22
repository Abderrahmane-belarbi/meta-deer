import HomeCardSection from '@/components/HomeCardSection';
import HomeCardSlier from '@/components/HomeCardSlider';
import { HomeCarousel } from '@/components/HomeCarousel';
import HomeCategories from '@/components/HomeCategories';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const slideritems1 = [
  {
    key: '1',
    image: '/assets/images/home/livingroom.png',
    url: '#',
    title: 'living room',
  },
  {
    key: '2',
    image: '/assets/images/home/diningroom.png',
    url: '#',
    title: 'dining room',
  },
  {
    key: '3',
    image: '/assets/images/home/bedroom.png',
    url: '#',
    title: 'bedRoom',
  },
];
const slideritems3 = [
  {
    key: '1',
    image: '/assets/images/home/NA_Apollo_Neo_Sofa.png',
    url: '#',
    title: 'Apollo Neo Sofa',
  },
  {
    key: '2',
    image: '/assets/images/home/NA_Atlas_Crest_dining_table_set.png',
    url: '#',
    title: 'Atlas Crest Dining Table',
  },
  {
    key: '3',
    image: '/assets/images/home/NA_Hanoi_Bed.png',
    url: '#',
    title: 'Hanoi Non Storage Bed',
  },
];
const slideritems2 = [
  {
    key: '1',
    image: '/assets/images/home/shop_the_look.png',
    url: '#',
    title: 'Brie',
  },
  {
    key: '2',
    image: '/assets/images/home/mia_white.png',
    url: '#',
    title: 'mia',
  },
  {
    key: '3',
    image: '/assets/images/home/stl_grata.png',
    url: '#',
    title: 'Gretta',
  },
];

const items = [
  {
    key: '1',
    image: '/assets/images/home/h1.jpg',
    url: '#',
    title: '',
    buttonCaption: '',
  },
  {
    key: '2',
    image: '/assets/images/home/h2.png',
    url: '#',
    title: '',
    buttonCaption: '',
  },
  {
    key: '3',
    image: '/assets/images/home/h3.png',
    url: '#',
    title: '',
    buttonCaption: '',
  },
];

export default function Home() {
  return (
    <div className='w-full'>
      <HomeCarousel items={items} />
      <HomeCategories />
      <HomeCardSection
        title='Presenting the new Terra collection'
        text='Inspired by nature’s quiet poetry, Terra is an invitation to slow down
          and settle into serenity.Designed with care, each piece invites you in
          with its warmth, textures, and the quiet elegance of true
          craftsmanship—a testament to the timeless dialogue between nature and
          design.'
        image='/assets/images/home/homecard.png'
      />
      <HomeCardSlier items={slideritems1} />
      <HomeCardSection
        title='Premium Products at Steal Prices!'
        text='Explore our curated selection of premium products, now available at exceptional steal prices for a touch of luxury in your home.'
        image='/assets/images/home/homecard2.png'
      />
      <HomeCardSlier items={slideritems2} title='Best Selling' />
      <HomeCardSlier items={slideritems3} title='New Arrivals' />
      <div className='mt-16 flex flex-col items-center'>
        <p
          className='text-gray-700 text-center text-2xl'
          style={{ fontFamily: 'var(--font-alegreya)' }}
        >
          See our products
        </p>
        <div className='mt-2 h-[1px] w-20 bg-[#f7750c]'></div>
      </div>
      <div className='max-w-[900px] mx-auto mt-6 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
        <ProductCard
          imageUrls={['/assets/images/home/bedroom.png']}
          name='Terra Bedroom Collection Furniture Masai Solid Wood King Size Hydraulic Storage Bed in American Walnut Finish'
          price={12000}
        />
        <ProductCard
          imageUrls={['/assets/images/home/bedroom.png']}
          name='Terra Bedroom Collection Furniture Masai Solid Wood King Size Hydraulic Storage Bed in American Walnut Finish'
          price={1800}
          discountPrice={100}
        />
        <ProductCard
          imageUrls={['/assets/images/home/bedroom.png']}
          name='Terra Bedroom Collection Furniture Masai Solid Wood King Size Hydraulic Storage Bed in American Walnut Finish'
          price={12000}
          discountPrice={100}
        />
        <ProductCard
          imageUrls={['/assets/images/home/bedroom.png']}
          name='Terra Bedroom Collection Furniture Masai Solid Wood King Size Hydraulic Storage Bed in American Walnut Finish'
          price={12000}
          discountPrice={100}
        />
        <ProductCard
          imageUrls={['/assets/images/home/bedroom.png']}
          name='Terra Bedroom Collection Furniture Masai Solid Wood King Size Hydraulic Storage Bed in American Walnut Finish'
          price={12000}
          discountPrice={100}
        />
        <ProductCard
          imageUrls={['/assets/images/home/bedroom.png']}
          name='Terra Bedroom Collection Furniture Masai Solid Wood King Size Hydraulic Storage Bed in American Walnut Finish'
          price={12000}
          discountPrice={100}
        />
      </div>
      <div className='py-8 w-full flex items-center '>
        <Link href='#' className='flex items-center mx-auto'>
          <Button className='uppercase rounded-r-sm cursor-pointer bg-[#f7750c] w-fit'>
            See More
          </Button>
        </Link>
      </div>
    </div>
  );
}
