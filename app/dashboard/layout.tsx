import type React from 'react';
import type { Metadata } from 'next';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  Home,
  Package,
  ShoppingCart,
  Users,
  BarChart,
  Settings,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'E-commerce admin dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className='flex min-h-screen'>
        <Sidebar>
          <SidebarHeader>
            <div className='flex items-center gap-2 px-2 py-3'>
              <ShoppingCart className='h-6 w-6' />
              <span className='font-bold text-xl'>Hi. Admin</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/dashboard'>
                    <Home className='h-4 w-4' />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/dashboard/products'>
                    <Package className='h-4 w-4' />
                    <span>Products</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/dashboard/orders'>
                    <ShoppingCart className='h-4 w-4' />
                    <span>Orders</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/dashboard/customers'>
                    <Users className='h-4 w-4' />
                    <span>Customers</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/dashboard/analytics'>
                    <BarChart className='h-4 w-4' />
                    <span>Analytics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/dashboard/settings'>
                    <Settings className='h-4 w-4' />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div className='flex items-center justify-between p-4'>
              <div className='flex items-center gap-2'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage src='/avatars/admin.png' alt='Admin' />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div>
                  <p className='text-sm font-medium'>Admin User</p>
                  <p className='text-xs text-muted-foreground'>
                    admin@example.com
                  </p>
                </div>
              </div>
              <button className='rounded-full p-1 hover:bg-muted'>
                <LogOut className='h-4 w-4' />
                <span className='sr-only'>Log out</span>
              </button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <main className='flex-1'>{children}</main>
      </div>
    </SidebarProvider>
  );
}
