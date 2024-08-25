import React from 'react';

export default function Navbar () {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed z-50 w-full">
    <div className="flex justify-between items-center max-w-screen-xl mx-auto">
    <div className="text-2xl font-bold">BOOKNOW</div>
    <div className="space-x-6">
      <a href="/about" className="hover:underline">About</a>
      <a href="/venues" className="hover:underline">Book</a>
      <a href="/login" className="hover:underline">Login / Signup</a>
    </div>
  </div>
</nav>

  );
};


