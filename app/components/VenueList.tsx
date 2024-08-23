import React, { useEffect, useState } from 'react';
import Venue from './VenueCards';

interface Turf {
  name: string;
  location: string;
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
      {turfs.map((turf, index) => (
        <Venue key={index} title={turf.name} location={turf.location} />
      ))}
    </div>
  );
};

export default VenueList;
