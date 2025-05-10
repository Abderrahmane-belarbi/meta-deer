import { HomeCarousel } from '@/components/HomeCarousel';

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
      <p className='mt-10 text-center text-3xl'>Explore Our Furniture Range</p>
    </div>
  );
}
