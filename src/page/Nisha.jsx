// import React from 'react'

import { useEffect, useState } from "react";
import VectorCards from "../components/VectorCards";

function Nisha() {
  const [name, setName] = useState("");
  const [imageURL, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [currColor, changeColor] = useState("#71c8f3");

  const [cards, setCards] = useState([
    {
      char: "Henry",
      imageURL: "https://www.adgully.com/img/800/909_image003.jpg",
      desc: "🤷 Horrid",
    },
  ]);

  const addCard = () => {
    if (name && imageURL && desc) {
      setCards((prev) => {
        return [...prev, { char: name, imageURL, desc }];
      });
      setName("");
      setImage("");
      setDesc("");
    } else return alert("Enter all input fields!");
  };

    const generateColor = () => {
        let color = "#";
        for (let i = 0; i < 6; i++) {
          const hexCode = "0123456789abcdefABCDEF";
          let curr = hexCode[Math.floor(Math.random() * 21)];
          color += curr;
        }
        return color
    }

  const btnColor = () => {
    changeColor(()=>generateColor);
  };

  const handleBtnClick = () => {
    // addCard();
    btnColor();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-5 flex-wrap mx-20">
        {cards.map((item, index) => {
          return (
            <VectorCards
              key={index}
              name={item.char}
              imageURL={item.imageURL}
              desc={item.desc}
            />
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-3 mt-10">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter character Name....."
          className="w-60 h-10 bg-transparent px-3 border-[#141515] border-[3px] rounded-lg text-[18px] outline-none"
          value={name}
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Enter Image URL....."
          className="w-60 h-10 bg-transparent px-3 border-[#141515] border-[3px] rounded-lg text-[18px] outline-none"
          value={imageURL}
        />
        <input
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          placeholder="Enter Description....."
          className="w-60 h-10 bg-transparent px-3 border-[#141515] border-[3px] rounded-lg text-[18px] outline-none"
          value={desc}
        />
      </div>

      <button
        className={`w-40 ${currColor} h-11 rounded-lg text-[20px] font-semibold mt-9`}
        onClick={() => changeColor(() => `bg-[${generateColor()}]`)}
      >
        {" "}
        Add Card
      </button>
    </div>
  );
}

export default Nisha;
