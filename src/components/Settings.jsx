import React, { useState, useEffect } from 'react';

const Settings = ({ onTextColorChange }) => {
  const [selectedColor, setSelectedColor] = useState('black');

  useEffect(() => {
    // Retrieve saved color from localStorage
    const savedColor = localStorage.getItem('textColor');
    setSelectedColor(savedColor || 'black');
  }, []);

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
    // Save selected color to localStorage
    localStorage.setItem('textColor', color);
    // Notify parent component about the color change
    onTextColorChange(color);
  };

  return (
    <div>
      <label htmlFor="textColor">Text Color</label>
      <input
        type="color"
        id="textColor"
        value={selectedColor}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default Settings;
