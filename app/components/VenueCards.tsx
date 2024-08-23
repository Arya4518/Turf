import React from 'react';
import Image from 'next/image';
import turfimg from '../../public/01.jpg'; // Ensure this path is correct

interface VenueProps {
  title: string;
  location: string;
}

const VenueCards: React.FC<VenueProps> = ({ title, location }) => {
  return (
    <div className='w-[400px] m-4 rounded-lg'>
      <Image src={turfimg} alt='turf' className='rounded-lg'/>
      <div className='flex flex-row items-center justify-between w-full'> 
        <div className='text-lg font-bold text-black'>{title}</div>
        <div className='text-[12px]'>{location}</div>
      </div>
      <button className='mt-4 p-2 bg-blue-500 text-white rounded-lg'>Book</button>
    </div>
  );
};

export default VenueCards;


