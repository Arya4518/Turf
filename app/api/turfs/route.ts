import { NextResponse } from 'next/server';
import  prisma  from '../../../prisma/prisma';
// Adjust the import to your setup

export async function GET() {
  try {
    const turfs = await prisma.turf.findMany({
      select: {
        name: true,
        location: true,
      },
    });
    return NextResponse.json(turfs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch turfs' }, { status: 500 });
  }
}
