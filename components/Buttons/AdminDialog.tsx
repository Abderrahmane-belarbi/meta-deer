'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../ui/button';

export default function AdminDialog() {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  function handleAdminAccess(e: React.FormEvent) {
    e.preventDefault();
    // This is a simple demo password. In a real app, you would use proper authentication
    if (password === 'admin123') {
      setOpen(false);
      router.push('/dashboard');
    } else {
      setError('Invalid password. Please try again.');
    }
  }

  return (
    <>
      <Button
        className='flex items-center gap-1 bg-white text-black hover:bg-gray-50 cursor-pointer'
        onClick={() => setOpen(true)}
      >
        <img src='/assets/svg/dashboard.svg' width={22} height={22} />
        <p className='font-normal'>Admin</p>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Admin Access</DialogTitle>
            <DialogDescription>
              Enter your admin password to access the admin dashboard.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAdminAccess}>
            <div className='grid gap-4 py-4'>
              <div className='grid gap-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  id='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter admin password'
                />
                {error && <p className='text-sm text-red-500'>{error}</p>}
              </div>
            </div>
            <DialogFooter>
              <Button
                type='button'
                variant='outline'
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type='submit'
                className='bg-orange-500 hover:bg-orange-600'
              >
                Access Admin
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
