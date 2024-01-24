import React, { useState } from 'react'
import LogoPage from './components/LogoPage'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  const savedColor = localStorage.getItem('textColor');
  const [textColor, setTextColor] = useState(savedColor || 'black');

  const handleTextColorChange = (color) => {
    setTextColor(color);
    localStorage.setItem('textColor', color);
  };
  return (
    <div style={{ color: textColor }}>
      <LogoPage onTextColorChange={handleTextColorChange} />
      <Navbar />
    </div>
  )
}

export default App