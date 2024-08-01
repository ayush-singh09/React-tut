import React from "react";

function ProductCard({ imageUrl, name, des, inStock }) {
  return (
    <div className="h-[350px] w-[250px] bg-zinc-700 rounded-lg overflow-hidden">
      <img className="h-[50%] w-full object-cover " src={imageUrl} alt="" />
      <div className="h-[50%] w-full text-white p-3">
        <h1 className="font-bold text-[30px]">{name}</h1>
        <h1 className="text-md font-bold text-zinc-400"></h1>
        <h1 className="">{des}</h1>
        <button
          className={` ${inStock ? "bg-blue-400" : "bg-red-400"} px-3 py-1 rounded-full mt-3 text-black `}
        >
          {inStock ? "Available" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
