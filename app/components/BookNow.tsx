import React from 'react';
import ImageSlider from '../components/ImageSlider';

const BookNow: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    <div className="absolute top-2 left-2">
    <ImageSlider/>
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
  );
};

export default BookNow;