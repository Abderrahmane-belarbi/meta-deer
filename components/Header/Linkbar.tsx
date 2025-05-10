import Link from 'next/link';

export default function Linkbar() {
  return (
    <div className='border-b border-gray-200'>
      <div className='py-[10px] font-light font-sans text-sm flex items-center justify-between max-w-[900px] m-auto'>
        {/* Help + Track Order + Icons */}
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1'>
            <img src='/assets/svg/help.svg' width={20} height={20} />
            <p>Help</p>
          </div>
          <div className='flex items-center gap-1'>
            <img src='/assets/svg/truck.svg' width={20} height={20} />
            <p>Track Order</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Link href='#'>Become a Franchisee</Link>
          <Link href='#'>Find a Store</Link>
          <Link href='#'>Bulk Orders</Link>
        </div>
      </div>
    </div>
  );
}
