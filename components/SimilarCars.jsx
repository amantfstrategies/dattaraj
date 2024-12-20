import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SimilarCars = ({ similarProducts, vehicle }) => {
  return (
    <div className='md:mx-40 px-4 md:px-0 '>
      <h2 className='w-full border-b text-xl font-[700] border-[#E5E5E5]'>Similar Cars</h2>
      <div className='flex flex-row w-full space-x-4 py-4 overflow-x-auto'>
        {/* Map through the products */}
        {similarProducts?.map((product) => {
          return (
            <Link href={`/${vehicle}/${product.id}`} key={product.id} className='w-fit'>
              <div className='w-full rounded-md border-2 z-20 border-gray-300 transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg'>
                <div className='flex flex-col items-center gap-1 pb-2'>
                  {/* Use the unoptimized prop for dynamic images */}
                  <div className='w-full h-60 relative'>
                    <Image
                      className='rounded-t-md h-full object-cover'
                      src={product.car.image}
                      alt={product.id}
                      width={400}   // Set the width you want
                      height={240}  // Set the height you want
                    />
                  </div>
                  <div className='flex flex-row justify-between w-full px-2 py-2 items-center gap-4'>
                    <h2 className='text-lg font-[700]'>{product.car.name}</h2>
                    <div>
                    <p className='flex flex-row text-xl font-semibold'>
                      <span className="text-xs mb-auto mt-1 mr-1">₹</span>
                      <span className='mb-auto'>{product.pricing.perDay}</span>
                    </p>
                    <p className='text-xs w-full text-center'>per day</p>
                    </div>

                  </div>

                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarCars;
