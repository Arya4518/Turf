import { useEffect } from 'react';
import React from 'react';
import Myimage from '../public/cricket.jpg';

import Venue from './venues/venue';


const Home: React.FC = () => {
  return (
    <div className="h-screen bg-gray-100">
      <header className="flex sticky top-0 justify-between items-center p-6 bg-white shadow-sm">

        <div className="text-2xl font-bold text-green-600">BOOKNOW</div>
        <nav className="flex space-x-6">
          <a href="about" className="text-gray-600">About</a>
          <a href="/venues" className="text-gray-600">Book</a>
          <a href="#" className="text-gray-600">Login / Signup</a>
        </nav>
      </header>

      <main className='h-screen'>
        <section className="bg-hero z-0 sticky top-0 w-full text-white h-screen flex justify-between items-center bg-white p-10 rounded-lg">
          <div className="">
          {/* <div className="flex items-center mb-4">
            <img src="/cricket.jpg" alt="Cricket" className="w-120 h-120"/>
            <span className="ml-2 text-gray-600">Mumbai</span>
          </div> */}
            <h1 className="text-4xl font-bold  mb-4">FIND PLAYERS & VENUES NEARBY</h1>
            <p className=" mb-6">Seamlessly explore sports venues and play with sports enthusiasts just like you!</p>
          </div>
          </section>
          <section className="sticky top-0 w-full h-screen bg-white">
          <div className="flex z-20 sticky top-0 w-full h-screen space-x-6">
            
            <Venue title="ABC" location="Mumbai Maharashtra"/>
            <Venue title="XYZ" location="Vadoadra Gujrat"/>
          </div>
          </section>
      </main>
    </div>
  );
};

export default Home;
