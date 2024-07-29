import React, { useState } from "react";

function ColoredButton() {
    const colors = ["#f3f32e", "#e42e1a", "#1951eb", "#e221f4", "#f4186c"];
    
    const [currentColor, setCurrentColor] = useState("#e42e1a");

    const handleColorChange = () => {
        const i = Math.floor(Math.random() * colors.length)
        setCurrentColor(colors[i]);
    }

  return (
      <div className="h-screen w-full bg-zinc-800 flex flex-col justify-center items-center gap-10 p-10">
          
      <div className={`h-56 w-56 bg-[${currentColor}] rounded-full`}></div>

      <button onClick={handleColorChange} className="font-bold text-3xl bg-red-400 p-3 px-5 rounded-lg">
        Click Me
      </button>
    </div>
  );
}

export default ColoredButton;
