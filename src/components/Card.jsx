import React from 'react'

function Card({ imageUrl, name, des, category }) {
  return (
    <div className="h-[300px] w-[250px] bg-zinc-700 rounded-lg overflow-hidden">
      <img className="h-[60%] w-full object-cover " src={imageUrl} alt="" />
      <div className="h-[40%] w-full text-white p-3">
        <h1 className="font-bold text-[30px]">{name}</h1>
        <h1 className="text-md font-bold text-zinc-400">
          Category: <span className='text-white'>{category}</span>
        </h1>
        <h1 className="text-xs truncate">{des}</h1>
      </div>
    </div>
  );
}

export default Card