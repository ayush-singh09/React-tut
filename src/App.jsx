import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState("Card 1");
  const [input, setInput] = useState("");
  const [text, setText] = useState("Enter Text to Display Here");

  // useEffect(function () {
  //   console.log("Component Mounted");

  //   return function () {
  //     console.log("Unmount");
  //   };
  // }, [data]);

  return (
    <>
      <Navbar />
      <div className="p-4 flex gap-4">
        {/* <Card name="Card 1" cardNumber='001' />
        <Card name="Card 2" cardNumber='002' />
        <Card name="Card 3" cardNumber='003' />
        <Card name="Card 4" cardNumber='004' />
        <Card name="Card 5" cardNumber='005' /> */}
        <input
          className="text-black"
          onChange={(event) => {
            setInput(event.target.value);
          }}
          type="text"
          placeholder="enter text"
          value={input}
        />
        {/* <button onClick={()=>setData('Chacha')} className='bg-red-500 p-4 rounded-lg h-fit'>Change</button> */}
        <button onClick={()=>setText(input)} className="bg-red-500 p-4 rounded-lg h-fit">Click</button>
        <h1>{text}</h1>
      </div>
    </>
  );
}

export default App;
