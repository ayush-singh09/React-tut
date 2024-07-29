import React, { useState } from "react";
import ManualCard from "../components/ManualCard";

function ShowDynamicCards() {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [imageUrl, setImageURL] = useState("");

  const [cards, setCards] = useState([
    {
      name: "Koala",
      des: "It is the only extant representative",
      imageUrl:
        "https://img.freepik.com/free-vector/cute-koala-hanging-tree-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-8369.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721908800&semt=sph",
    },
  ]);

  const addCard = () => {
    if (name && des && imageUrl)
    {
        setCards((prev) => {
          return [...prev, { name, imageUrl, des }];
        });
        setDes("")
        setImageURL("")
        setName("")
    }
    else alert("Please Enter All Field !!");
  };

  return (
    <div className="h-screen w-full bg-zinc-800 flex flex-wrap justify-center items-center gap-10 p-10">
      {cards.map((item, index) => {
        return (
          <ManualCard
            key={index}
            name={item.name}
            des={item.des}
            imageUrl={item.imageUrl}
          />
        );
      })}
      <div className="flex flex-col gap-3 p-3">
        <input
          onChange={(e) => setName(e.target.value)}
          className="bg-transparent border p-1 px-2 rounded-md"
          placeholder="Enter Name"
          type="text"
          value={name}
        />
        <input
          onChange={(e) => setImageURL(e.target.value)}
          className="bg-transparent border p-1 px-2 rounded-md"
          placeholder="Enter ImageURL"
          type="text"
          value={imageUrl}
        />
        <input
          onChange={(e) => setDes(e.target.value)}
          className="bg-transparent border p-1 px-2 rounded-md"
          placeholder="Enter Description"
          type="text"
          value={des}
        />
        <button
          onClick={addCard}
          className="p-1 px-2 bg-yellow-400 text-black font-bold text-xl rounded-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ShowDynamicCards;
