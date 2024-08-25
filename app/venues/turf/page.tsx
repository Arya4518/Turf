import React from 'react';
import Image from 'next/image';
import cricketim from '../../../public/cricket.jpg';
import Rightturf from './rightturf';

const VenuePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Image Slider */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src={cricketim}
                alt="Venue"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute top-2 left-2">
              <button className="bg-white rounded-full p-2 shadow">
                {/* Previous Button Icon */}
              </button>
            </div>
            <div className="absolute top-2 right-2">
              <button className="bg-white rounded-full p-2 shadow">
              </button>
            </div>
          </div>
    <Rightturf/>
        </div>
      </main>
    </div>
  );
};

export default VenuePage;
