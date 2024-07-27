import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { FaDiscord } from "react-icons/fa";

function App() {
  const [data, setData] = useState([]);

  const [active, setActive] = useState(true);

  const getData = async () => {
    const data = await fetch("https://fakestoreapi.in/api/products");
    const resData = await data.json();
    setData(resData.products);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="h-screen w-full bg-zinc-800 flex flex-wrap justify-center items-center gap-10 p-10">
      <div className="bg-red-400 h-[300px] w-56 rounded flex items-center justify-center gap-3 flex-col ">
        {active ? (
          <h1 className="font-bold text-white bg-blue-400 p-3 rounded-md text-3xl">
            Hello
          </h1>
        ) : (
          ""
        )}
        <button
          onClick={() => setActive((prev)=>!prev)}
          className=" bg-green-400 p-3 rounded-md text-2xl"
        >
          {active?"Deactivate":"Activate"}
        </button>
      </div>
      {data?.map((item, index) => {
        return (
          <Card
            key={index}
            imageUrl={item.image}
            name={item.brand}
            des={item.description}
            category={item.category}
          />
        );
      })}
    </div>
  );
}

export default App;
