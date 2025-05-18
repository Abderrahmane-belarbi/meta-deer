import Link from 'next/link';
import AdminDialog from '../Buttons/AdminDialog';

export default function Linkbar() {
  return (
    <div className='border-b border-gray-200'>
      <div className='py-[10px] font-light font-sans text-sm flex items-center justify-between max-w-[900px] m-auto'>
        {/* Help + Track Order + Icons */}
        <div className='flex items-center gap-4'>
          <Link className='flex items-center gap-1' href='#'>
            <img src='/assets/svg/help.svg' width={20} height={20} />
            <p className='font-normal'>Help</p>
          </Link>
          <AdminDialog />
        </div>
        <div className='flex items-center gap-4'>
          <Link href='#' className='font-normal'>
            Become a Franchisee
          </Link>
          <Link href='#' className='font-normal'>
            Find a Store
          </Link>
          <Link href='#' className='font-normal'>
            Bulk Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
