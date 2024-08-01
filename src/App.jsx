import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import ShowDynamicCards from './page/ShowDynamicCards';
import ColoredButton from './page/ColoredButton';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/dynamic' element={<ShowDynamicCards />} />
        <Route path='/buttons' element={<ColoredButton/>} />
      </Routes>
    </div>
  );
}

export default App