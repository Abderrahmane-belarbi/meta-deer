import Image from 'next/image';
import Link from 'next/link';

export default function HomeCategories() {
  const items = [
    {
      key: 1,
      image: '/assets/images/categories/New_Arrivals.png',
      title: 'New Arrivals',
      url: '#',
    },
    {
      key: 2,
      image: '/assets/images/categories/Sofas.png',
      title: 'Sofas',
      url: '#',
    },
    {
      key: 3,
      image: '/assets/images/categories/Web_Sofa_Cum_bed.png',
      title: 'Sofa Cum bed',
      url: '#',
    },
    {
      key: 4,
      image: '/assets/images/categories/Beds.png',
      title: 'Beds',
      url: '#',
    },
    {
      key: 5,
      image: '/assets/images/categories/Dining.png',
      title: 'Dining',
      url: '#',
    },
    {
      key: 6,
      image: '/assets/images/categories/Wardrobes.png',
      title: 'Wardrobes',
      url: '#',
    },
    {
      key: 7,
      image: '/assets/images/categories/Shoe_Racks.png',
      title: 'Shoe Racks',
      url: '#',
    },
    {
      key: 8,
      image: '/assets/images/categories/TV_units.png',
      title: 'TV Units',
      url: '#',
    },
    {
      key: 9,
      image: '/assets/images/categories/Recliners.png',
      title: 'Recliners',
      url: '#',
    },
    {
      key: 10,
      image: '/assets/images/categories/Seating.png',
      title: 'Seating',
      url: '#',
    },
    {
      key: 11,
      image: '/assets/images/categories/Coffee_Tables.png',
      title: 'Coffee Tables',
      url: '#',
    },
    {
      key: 12,
      image: '/assets/images/categories/Study.png',
      title: 'Study',
      url: '#',
    },
    {
      key: 13,
      image: '/assets/images/categories/Deal_Zone.png',
      title: 'Deal Zone',
      url: '#',
    },
  ];
  return (
    <div className='max-w-[900px] m-auto py-4 flex flex-wrap justify-center gap-12'>
      {items.map((item) => {
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
  );
}
