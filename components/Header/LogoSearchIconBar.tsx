import Image from 'next/image';

export default function LogoSearchIconBar() {
  return (
    <div className='border-b border-gray-200'>
      <div className='max-w-[900px] m-auto flex items-center justify-between py-[10px]'>
        <div className='flex items-center gap-2'>
          <Image src='/assets/png/logo.png' width={50} height={50} alt='Logo' />
          <div className='flex flex-col font-comfortaa font-semibold text-gray-700 leading-none text-[20px] tracking-[0.5px]'>
            <p>Meta</p>
            <p>Dear</p>
          </div>
        </div>
        <div className='flex flex-1 justify-center'>
          <input
            type='text'
            placeholder='Search'
            className='w-full max-w-xl border border-gray-300 p-2 px-4 rounded-full focus:outline-none'
          />
        </div>
        <div className='flex items-center gap-2'>
          <img src='/assets/svg/truck.svg' width={25} height={25} />
          <img src='/assets/svg/profile.svg' width={25} height={25} />
          <img src='/assets/svg/heart.svg' width={25} height={25} />
          <img src='/assets/svg/cart.svg' width={25} height={25} />
        </div>
      </div>
    </div>
  );
}
