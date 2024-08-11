import React from 'react'

const navbarr = () => {
  return (
    <div>      
        <header className="flex justify-between items-center p-6 bg-white shadow-sm">

    <div className="text-2xl font-bold text-green-600">PLAYO</div>
    <nav className="flex space-x-6">
      <a href="about" className="text-gray-600">About</a>
      <a href="/venues" className="text-gray-600">Book</a>
      <a href="#" className="text-gray-600">Login / Signup</a>
    </nav>
  </header></div>
  )
}

export default navbarr