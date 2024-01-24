import React, { useState } from 'react'
import LogoPage from './components/LogoPage'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  const savedTextColor = localStorage.getItem('textColor') || 'black';
  const savedBgColor = localStorage.getItem('bgColor') || 'white';

  const [textColor, setTextColor] = useState(savedTextColor);
  const [bgColor, setBgColor] = useState(savedBgColor);

  const handleColorChange = (type, color) => {
    if (type === 'textColor') {
      setTextColor(color);
      localStorage.setItem('textColor', color);
    } else if (type === 'bgColor') {
      setBgColor(color);
      localStorage.setItem('bgColor', color);
    }
  };
  return (
    <div style={{ color: textColor, backgroundColor: bgColor }}>
      <LogoPage onColorChange={handleColorChange} />
      <Navbar />
    </div>
  )
}

export default App