import HomeCardSection from '@/components/HomeCardSection';
import HomeCard from '@/components/HomeCardSection';
import { HomeCarousel } from '@/components/HomeCarousel';
import HomeCategories from '@/components/HomeCategories';

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
        className='mt-10 text-center text-3xl'
        style={{ fontFamily: 'var(--font-loveya)' }}
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
    </div>
  );
}
