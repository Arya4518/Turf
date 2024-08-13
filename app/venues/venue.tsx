import React from 'react'
import Image from 'next/image'
import turfimg from '../../public/01.jpg'


export default function Venue(props:any){
  return (
    <div className='w-[400px] m-4 rounded-lg'>
      <Image src={turfimg} alt='turf' className='rounded-lg'/>
      <div className='flex flex-row items-center justify-between w-full'> 
      <div className='text-lg font-bold'>{props.title}</div>
      <div className='text-[12px]'>Mumbai,Maharashtra</div></div>
      
      
   
      <button>Book</button>
    </div>
  )
}

