import React from 'react'

function NavBar() {
  return (
    <div className='w-full h-[50px] bg-[#13035b] flex items-center justify-between text-white p-5'>
        <h1>Logo</h1>
        <div className=' flex gap-2'>
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">About us</a>
        </div>
    </div>
  )
}

export default NavBar