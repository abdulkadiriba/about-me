import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
};
export default function Gallery() {
  return (
    <>
      <h2 className='py-12 text-center text-3xl font-bold md:py-16'>Gallery</h2>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='/img/gallery/1.webp'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='/img/gallery/9.webp'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='/img/gallery/3.webp'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='/img/gallery/4.webp'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='/img/gallery/5.webp'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='/img/gallery/7.webp'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='/img/gallery/6.webp'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='/img/gallery/8.webp'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='/img/gallery/2.webp'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='/img/gallery/10.webp'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='/img/gallery/11.webp'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='/img/gallery/12.webp'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
}
