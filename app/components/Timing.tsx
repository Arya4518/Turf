"use client";

import React, { useEffect, useState } from 'react';

interface Turf {
  timing: string;
}

const Timing: React.FC = () => {
  const [timing, setTiming] = useState<string>('');

  useEffect(() => {
    const fetchTiming = async () => {
      try {
        const response = await fetch('/api/turfs'); // Fetches all turfs
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Turf[] = await response.json();
        
        // Assuming you want to display the timing of the first turf entry
        if (data.length > 0) {
          setTiming(data[0].timing);
        } else {
          setTiming('No timing data available');
        }

      } catch (error) {
        console.error('Error fetching timing:', error);
        setTiming('Error fetching timing data');
      }
    };

    fetchTiming();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Timing</h2>
      <div className="text-black">{timing}</div>
    </div>
  );
};

export default Timing;
