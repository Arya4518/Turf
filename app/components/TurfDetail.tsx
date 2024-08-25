// app/components/TurfDetail.tsx
import React from 'react';
import Image from 'next/image';
import cricketim from '../../public/cricket.jpg';
import Timing from '@/app/components/Timing';
import BookNow from '@/app/components/BookNow';
import Map_turf from '@/app/components/Map_turf';


interface TurfDetailProps {
  name: string;
  city: string | null;
  pricePerHour: number;
  description: string | null;
}

const TurfDetail: React.FC<TurfDetailProps> = ({ name, city, pricePerHour, description }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
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
                {/* Next Button Icon */}
              </button>
            </div>
          </div>
          {/* Right side - Turf Details */}
          <div className="space-y-4">
            <div className="text-3xl font-bold">{name}</div>
            <div className="text-gray-600">Location: {city}</div>
            <p>Description: {description}</p>
            <p>Price per hour: ₹ {pricePerHour}</p>
            <BookNow/>
            <Timing/>
            <Map_turf/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TurfDetail;
