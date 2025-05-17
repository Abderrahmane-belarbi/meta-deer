// components/Sidebar.tsx
import {
  Home,
  Box,
  ShoppingCart,
  Users,
  BarChart2,
  Settings,
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className='w-64 bg-white shadow-lg p-4 space-y-4'>
      <h2 className='font-bold text-xl mb-4'>Hi. Admin</h2>
      <nav className='space-y-3'>
        <NavItem
          icon={<Home size={18} />}
          label='Dashboard'
          href='/dashboard'
        />
        <NavItem icon={<Box size={18} />} label='Products' href='#' />
        <NavItem icon={<ShoppingCart size={18} />} label='Orders' href='#' />
        <NavItem icon={<Users size={18} />} label='Customers' href='#' />
        <NavItem icon={<BarChart2 size={18} />} label='Analytics' href='#' />
        <NavItem icon={<Settings size={18} />} label='Settings' href='#' />
      </nav>
    </aside>
  );
}

function NavItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className='flex items-center space-x-2 text-gray-700 hover:text-black'
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
