'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ArrowLeft, Loader2, X } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { categories } from '@/lib/data';
import { createProduct } from '@/lib/actions/Product';
import { useEdgeStore } from '@/lib/edgestore';
import LoaderSpinner from '@/components/Buttons/Loader';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Product name must be at least 2 characters.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
  price: z.coerce.number().min(0, 'Price must be a non-negative number.'),
  discountedPrice: z.coerce
    .number()
    .min(0, 'Discounted price must be a non-negative number.'),
  category: z.string({ required_error: 'Please select a category.' }),
  stock: z.coerce.number().min(0, 'Stock must be a non-negative number.'),
  featured: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function NewProductPage() {
  const router = useRouter();
  const { edgestore } = useEdgeStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [imageLoading, setImageLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      discountedPrice: 0,
      category: '',
      stock: 0,
      featured: false,
    },
  });

  const handleFiles = useCallback(
    async (selectedFiles: FileList | File[]) => {
      const fileArray = Array.from(selectedFiles);

      const newUrls: string[] = [];

      for (const file of fileArray) {
        setImageLoading(true);
        const res = await edgestore.publicFiles.upload({
          file,
          onProgressChange: (progress) => {
            console.log(`Upload progress: ${progress}%`);
          },
        });
        newUrls.push(res.url);
      }

      // Append to existing URLs
      setImageUrls((prev) => [...prev, ...newUrls]);
      setImageLoading(false);
    },
    [edgestore]
  );

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      await handleFiles(e.dataTransfer.files);
    }
  };

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    await createProduct({
      ...values,
      imageUrls,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/dashboard/products');
    }, 1000);
  };

  function handleRemoveImage(index: number) {
    const newUrls = [...imageUrls];
    newUrls.splice(index, 1);
    setImageUrls(newUrls);
  }
  return (
    <div className='flex-1 space-y-4 p-8 pt-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <Link href='/dashboard/products'>
            <Button variant='outline' size='icon'>
              <ArrowLeft className='h-4 w-4' />
            </Button>
          </Link>
          <h2 className='text-3xl font-bold tracking-tight'>New Product</h2>
        </div>
      </div>

      <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
        {/* Form Section */}
        <div className='space-y-4'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Coffee Table' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='grid grid-cols-2 gap-4'>
                <FormField
                  control={form.control}
                  name='price'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price ($)</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='stock'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stock</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name='discountedPrice'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discounted Price ($)</FormLabel>
                    <FormControl>
                      <Input type='number' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='category'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select a Category' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem
                            key={category.key}
                            value={category.title.toLowerCase()}
                          >
                            {category.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        className='min-h-[120px]'
                        placeholder='Enter product description...'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='featured'
                render={({ field }) => (
                  <FormItem className='flex flex-row items-start space-x-3 border rounded-md p-4'>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className='space-y-1 leading-none'>
                      <FormLabel>Featured Product</FormLabel>
                      <p className='text-sm text-muted-foreground'>
                        This product will appear on the homepage.
                      </p>
                    </div>
                  </FormItem>
                )}
              />

              <Button type='submit' disabled={isSubmitting} className='w-full'>
                {isSubmitting ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Creating...
                  </>
                ) : (
                  'Create Product'
                )}
              </Button>
            </form>
          </Form>
        </div>

        {/* Upload Area */}
        <div className='rounded-lg border p-6'>
          <h3 className='mb-4 text-lg font-medium'>Product Images</h3>
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className='flex h-64 w-full flex-col items-center justify-center space-y-4 rounded-md border border-dashed'
          >
            <p className='text-sm text-muted-foreground'>
              Select or Drag and drop images here
            </p>
            {!imageLoading ? (
              <label className='cursor-pointer bg-muted px-4 py-2 rounded-md text-sm hover:bg-muted/80'>
                Upload Files
                <input
                  type='file'
                  multiple
                  className='hidden'
                  onChange={(e) => {
                    if (e.target.files) handleFiles(e.target.files);
                  }}
                />
              </label>
            ) : (
              <LoaderSpinner />
            )}
          </div>

          {/* Preview Images */}
          <div className='mt-4 grid grid-cols-4 gap-2'>
            {imageUrls.map((url, i) => (
              <div className='relative' key={i}>
                <X
                  onClick={() => handleRemoveImage(i)}
                  size={22}
                  className='absolute -top-2 -right-2 cursor-pointer text-black bg-white rounded-full border-2 border-gray-800 p-[3px]'
                />
                <img
                  src={url}
                  alt={`Product ${i + 1}`}
                  className='h-24 w-full object-cover rounded-sm border'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
