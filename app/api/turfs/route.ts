import { NextResponse } from 'next/server';
import prisma from '../../../prisma/prisma'; // Adjust the import based on your setup

export async function GET() {
  try {
    // Fetch data from the Prisma database
    const turfs = await prisma.turf.findMany({
      select: {
        turfId: true,         // Include primary key if needed
        ownerId: true,        // Include ownerId if needed
        name: true,
        location: true,
        description: true,    // Handles text field
        pricePerHour: true,
        availability: true,
        city: true,
        state: true,
        timing: true
        
      },
    });

    // Return the fetched data as a JSON response
    return NextResponse.json(turfs);
  } catch (error) {
    // Handle any errors that occur
    console.error('Error fetching turfs:', error);
    return NextResponse.json({ error: 'Failed to fetch turfs' }, { status: 500 });
  }
}
