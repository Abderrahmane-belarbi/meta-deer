import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export default function ProductsPage() {
  return (
    <div className='w-full space-y-4 p-8 pt-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-bold tracking-tight'>Products</h2>
        <div className='flex items-center space-x-2'>
          <Link href='/dashboard/products/new'>
            <Button>
              <PlusCircle className='mr-2 h-4 w-4' />
              Add Product
            </Button>
          </Link>
        </div>
      </div>
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[80px]'>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    width={40}
                    height={40}
                    className='rounded-md object-cover'
                  />
                </TableCell>
                <TableCell className='font-medium'>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      product.status === 'In Stock' ? 'default' : 'secondary'
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell className='text-right'>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <Button variant='ghost' size='sm'>
                      Edit
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 99.99,
    stock: 45,
    status: 'In Stock',
    image: '/placeholder.svg?height=40&width=40',
  },
  {
    id: '2',
    name: 'Smart Watch',
    category: 'Electronics',
    price: 199.99,
    stock: 28,
    status: 'In Stock',
    image: '/placeholder.svg?height=40&width=40',
  },
  {
    id: '3',
    name: 'Laptop Backpack',
    category: 'Accessories',
    price: 59.99,
    stock: 0,
    status: 'Out of Stock',
    image: '/placeholder.svg?height=40&width=40',
  },
  {
    id: '4',
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 79.99,
    stock: 12,
    status: 'In Stock',
    image: '/placeholder.svg?height=40&width=40',
  },
  {
    id: '5',
    name: 'Fitness Tracker',
    category: 'Wearables',
    price: 49.99,
    stock: 32,
    status: 'In Stock',
    image: '/placeholder.svg?height=40&width=40',
  },
];
