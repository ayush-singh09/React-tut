import React from 'react'

function Navbar() {
  return (
    <div className='bg-zinc-700 flex justify-between p-5'>
      <h1 className='font-bold text-4xl'>Logo</h1>
      <div className='flex gap-3'>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Contact</a>
      </div>
    </div>
  )
}

export default Navbar