import React from 'react';



const ImageSlider = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Image Slider */}
            <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                    <img src="/cricket" alt='turf' className='rounded-lg'></img>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageSlider