import React from 'react'

function Card({ name, cardNumber }) {
  return (
    <div className="h-[300px] w-[200px] bg-indigo-500 p-3 rounded-lg">
      <h1 className="text-xl text-black font-bold ">Card ID: {cardNumber} </h1>
      <h1 className="text-xl text-black font-bold ">{name}</h1>
    </div>
  );
}
    
export default Card