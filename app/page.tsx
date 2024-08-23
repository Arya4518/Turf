"use client";

import { useEffect, useState } from 'react';
import React from 'react';
import Myimage from '../public/cricket.jpg';

import VenueList from './components/VenueList';


interface Turf {
  name: string;
  location: string;
  // Add other properties if needed
}

const Home: React.FC = () => {
  const [turfs, setTurfs] = useState<Turf[]>([]); // Specify the state type

  useEffect(() => {
    const fetchTurfs = async () => {
      try {
        const response = await fetch('/api/turfs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Turf[] = await response.json(); // Type the data
        setTurfs(data);
      } catch (error) {
        console.error('Error fetching turfs:', error);
      }
    };

    fetchTurfs();
  }, []);

  return (
    
      
      <main className='h-screen'>
        <section className="bg-hero z-0 sticky top-0 w-full text-white h-screen flex justify-between items-center bg-white p-10 ">
          <div className="">
            <h1 className="text-4xl font-bold mb-4">FIND PLAYERS & VENUES NEARBY</h1>
            <p className="mb-6">Seamlessly explore sports venues and play with sports enthusiasts just like you!</p>
          </div>
        </section>
        <section className="sticky top-0 w-full h-screen bg-white">
          <div className="flex z-20 sticky top-0 w-full h-screen space-x-6">
<<<<<<< HEAD
            <VenueList/>
            <a href="/venues/turf" className="text-gray-600">turfimg</a>
=======
            
            <Venue title="ABC" location="Mumbai Maharashtra"/>
            <Venue title="XYZ" location="Vadoadra Gujrat"/>
            <a href="turf" className="text-gray-600">turf</a>
>>>>>>> 5f8147ad8c0b196db1283a8d9f1b59c80204468a
          </div>
        </section>
      </main>
    
  );
};

export default Home;
