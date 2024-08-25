import React from 'react'

const Map_turf = () => {
  return (
    <div>
    <div className="mt-6">
    <h2 className="text-lg font-semibold">Location</h2>
    <p className="text-gray-600">
      537F+F7C, Casa Bella, Casa Bella Gold, Nilje Gaon, Maharashtra 421204
    </p>
    <div className="mt-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3995864052987!2d72.94796177403558!3d19.21955884700254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795441d2bba8d%3A0xc8fcb2fe4e9c0cf7!2sHotFut%20Palava%20Ground!5e0!3m2!1sen!2sin!4v1686054531689!5m2!1sen!2sin"
        width="400"
        height="300"
        
        loading="lazy"
        className="border-0"
      ></iframe>
    </div>
    </div>
    </div>
  );
};

export default Map_turf;