import React, { useState } from "react";
import Card from "./components/Card";

function App() {

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

  // const [data, setData] = useState([])

  // const fun = async () => {
  //   fetch('svbgfndfg')
  //     .then(res => {
  //     setData(res.data)
      
  //   })
  // }
  

  return (
    <div className="h-screen w-full bg-zinc-800 flex justify-center items-center gap-3">
      {cards.map((item, index) => {
        return (
          <Card
            key={index}
            imageUrl={item.imageUrl}
            name={item.name}
            des={item.des}
          />
        );
      })}
    </div>
  );
}

export default App;
