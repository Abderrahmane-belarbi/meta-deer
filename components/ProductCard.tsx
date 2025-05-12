import Image from 'next/image';

type ProductCardProps = {
  image: string;
  title: string;
  discountPrice?: number;
  price: number;
};

// Format price to Indian Rupees
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

export default function ProductCard({
  image,
  title,
  discountPrice,
  price,
}: ProductCardProps) {
  return (
    <div className='max-w-[322px] flex flex-col p-4 items-center gap-4 transition-shadow hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] shadow-gray-400 duration-200'>
      <Image src={image} width={297} height={297} alt={title} />
      <p className='px-8 text-center text-sm text-gray-800'>{title}</p>
      {discountPrice ? (
        <div className='flex items-center gap-2'>
          <span className='text-xl font-bold text-gray-900'>
            {formatPrice(discountPrice)}
          </span>
          <span className='text-sm text-gray-500 line-through'>
            {formatPrice(price)}
          </span>
        </div>
      ) : (
        <span className='text-xl font-bold text-gray-900'>
          {formatPrice(price)}
        </span>
      )}
    </div>
  );
}
