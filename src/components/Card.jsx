import React from 'react'

function Card({ imageUrl ,name, des}) {
  return (
    <div className="h-[300px] w-[250px] bg-pink-200 rounded-lg overflow-hidden">
      <img
        className="h-[60%] w-full object-cover "
        src={imageUrl}
        alt=""
      />
      <div className="h-[40%] w-full text-black p-3">
        <h1 className="font-bold text-[30px]">{name }</h1>
        <h1 className="">{ des}</h1>
      </div>
    </div>
  );
}

export default Card