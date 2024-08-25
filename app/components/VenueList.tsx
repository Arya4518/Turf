import React, { useEffect, useState } from 'react';
import VenueCards from './VenueCards'; // Ensure correct import path

interface Turf {
  turfId: number; // Include turfId
  name: string;
  city: string;
  pricePerHour: string;
}

const VenueList: React.FC = () => {
  const [turfs, setTurfs] = useState<Turf[]>([]);

  useEffect(() => {
    const fetchTurfs = async () => {
      try {
        const response = await fetch('/api/turfs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Turf[] = await response.json();
        setTurfs(data);
      } catch (error) {
        console.error('Error fetching turfs:', error);
      }
    };

    fetchTurfs();
  }, []);

  return (
    <div className="flex flex-wrap">
      {turfs.map((turf) => (
        <VenueCards
          key={turf.turfId} // Use turfId as the key
          turfId={turf.turfId} // Pass turfId to VenueCards
          title={turf.name}
          location={turf.city}
          price={turf.pricePerHour}
        />
      ))}
    </div>
  );
};

export default VenueList;
