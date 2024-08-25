import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import turfimg from '../../public/01.jpg';

interface VenueProps {
  turfId: number; // Include turfId
  title: string;
  location: string;
  price: string;
}

const VenueCards: React.FC<VenueProps> = ({ turfId, title, location, price }) => {
  return (
    <div className='w-[400px] m-4 rounded-lg'>
      <Image src={turfimg} alt='turf' className='rounded-lg'/>
      <div className='flex flex-row items-center justify-between w-full'> 
        <Link href={`/venues/${turfId}`}>
          <div className='text-lg font-bold text-black'>{title}</div>
        </Link>
        <div className='text-[12px]'>{location}</div>
      </div>
      <div className='mt-4 p-2 bg-blue-500 text-white rounded-lg w-20 text-center'>
        ₹ {price}
      </div>
    </div>
  );
};

export default VenueCards;
