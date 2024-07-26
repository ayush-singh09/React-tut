import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { FaDiscord } from "react-icons/fa";

function App() {

  const [text, setText] = useState("Hello");
  const [data, setData] = useState([])

  const cards = [
    {
      name: "Koala",
      des: "It is the only extant representative",
      imageUrl:
        "https://img.freepik.com/free-vector/cute-koala-hanging-tree-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-8369.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721908800&semt=sph",
    },
    {
      name: "Monkey",
      des: "I love sweat sweat banana very much.",
      imageUrl:
        "https://img.freepik.com/free-vector/cute-monkey-sleeping-banana-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3527.jpg",
    },
    {
      name: "Abhishek",
      des: "I have a problem if Lisp, I cannot pronounce S",
      imageUrl:
        "https://cdn.dribbble.com/users/2472126/screenshots/10952863/media/62dabf1832e2c5bccceaefb09c0840d4.jpg?resize=400x0",
    },
  ];

  const getData = async () => {
    const data = await fetch("https://fakestoreapi.in/api/products");
    const resData = await data.json()
    setData(resData.products);
  }

  useEffect(() => {
    console.log(text);
  }, [text])
  
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  },[data])


  return (
    <div className="h-screen w-full bg-zinc-800 flex flex-wrap justify-center items-center gap-10 p-10">
      <FaDiscord size={60} />
      {data?.map((item, index) => {
        return (
          <Card
            key={index}
            imageUrl={item.image}
            name={item.brand}
            des={item.category}
          />
        );
      })}
      <button
        onClick={() => setText("react")}
        className="w-fit h-fit p-1 bg-red-400"
      >
        Change
      </button>
    </div>
  );
}

export default App;
