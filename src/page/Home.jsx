import React, { useState } from "react";
import ManualCard from "../components/ManualCard";

function Home() {
  const [text, setText] = useState("");
  const [name, setname] = useState("")

    const [card, setCard] = useState({
      name: "Koala",
      des: "It is the only extant representative",
      imageUrl:
        "https://img.freepik.com/free-vector/cute-koala-hanging-tree-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-8369.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721908800&semt=sph",
    });

  const [cards, setcards] = useState([
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
  ]);

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
      <input
        onChange={(e) => setText(e.target.value)}
        className="bg-transparent border rounded px-3 py-1"
        placeholder="enter description"
        type="text"
      />
      <button
        onClick={() =>
          setcards((prev) => {
            return prev.map((item) => {
              if (item.name != "Monkey") return item;
              else
                return {
                  name: item.name,
                  des: text,
                  imageUrl: item.imageUrl,
                };
            });
          })
        }
        className="bg-green-400 rounded px-3 py-1"
      >
        Change
      </button>
    </div>
  );
}

export default Home;
