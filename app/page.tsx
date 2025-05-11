import HomeCardSection from '@/components/HomeCardSection';
import HomeCardSlier from '@/components/HomeCardSlider';
import { HomeCarousel } from '@/components/HomeCarousel';
import HomeCategories from '@/components/HomeCategories';

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
    <div>
      <HomeCarousel items={items} />
      <p
        className='mt-10 text-center text-2xl'
        style={{ fontFamily: 'var(--font-alegreya)' }}
      >
        Explore Our Furniture Range
      </p>
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
      <HomeCardSlier items={slideritems2} />
      <HomeCardSlier items={slideritems3} title='New Arrivals' />
    </div>
  );
}
