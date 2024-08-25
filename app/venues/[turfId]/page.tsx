// app/venues/[turfId]/page.tsx
import React from 'react';
import prisma from '../../../prisma/prisma'; // Adjust the import as needed
import TurfDetail from '../../components/TurfDetail'; // Adjust the import path as needed



interface Turf {
  name: string;
  city: string | null;
  pricePerHour: string;
  description: string;
}

interface Props {
  params: {
    turfId: string;
  };
}

const TurfDetails: React.FC<Props> = async ({ params }) => {
  const { turfId } = params;
  
  // Fetch data from the database
  const turf = await prisma.turf.findUnique({
    where: { turfId: parseInt(turfId, 10) },
  });

  if (!turf) {
    return <p>Venue not found.</p>;
  }

  return (
    <div >
    <TurfDetail
      name={turf.name}
      city={turf.city}
      pricePerHour={turf.pricePerHour}
      description={turf.description}
    />
    
    </div>
  );
};

export default TurfDetails;
