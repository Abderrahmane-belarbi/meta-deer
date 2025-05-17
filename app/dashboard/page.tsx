import {
  CreditCard,
  DollarSign,
  Package,
  ShoppingCart,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
/* import { Overview } from "./components/overview" */
/* import { RecentSales } from "./components/recent-sales" */
export default function DashboardPage() {
  return (
    <div className='flex-1 space-y-4 p-8 pt-6'>
      <div className='flex items-center gap-2'>
        <Link href={'/'}>
          <FaArrowLeft size={20} className='cursor-pointer' />
        </Link>
        <h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>$45,231.89</div>
            <p className='text-xs text-muted-foreground'>
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Orders</CardTitle>
            <ShoppingCart className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+573</div>
            <p className='text-xs text-muted-foreground'>
              +12.4% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Sales</CardTitle>
            <CreditCard className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+$12,234</div>
            <p className='text-xs text-muted-foreground'>
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Active Customers
            </CardTitle>
            <Users className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+2350</div>
            <p className='text-xs text-muted-foreground'>
              +10.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <Card className='col-span-4'>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              Sales overview for the current year.
            </CardDescription>
          </CardHeader>
          <CardContent className='pl-2'>{/* <Overview /> */}</CardContent>
        </Card>
        <Card className='col-span-3'>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>
              Recent orders from your customers.
            </CardDescription>
          </CardHeader>
          <CardContent>{/*  <RecentSales /> */}</CardContent>
        </Card>
      </div>
    </div>
  );
}
