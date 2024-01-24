import React, { useState, useEffect } from 'react';

const Settings = ({ onColorChange }) => {
  const [selectedTextColor, setSelectedTextColor] = useState('black');
  const [selectedBgColor, setSelectedBgColor] = useState('white');

  useEffect(() => {
    const savedTextColor = localStorage.getItem('textColor') || 'black';
    const savedBgColor = localStorage.getItem('bgColor') || 'white';

    setSelectedTextColor(savedTextColor);
    setSelectedBgColor(savedBgColor);
  }, []);

  const handleColorChange = (type, event) => {
    const color = event.target.value;

    if (type === 'textColor') {
      setSelectedTextColor(color);
    } else if (type === 'bgColor') {
      setSelectedBgColor(color);
    }

    onColorChange(type, color);
  };

  return (
    <div>
    <label htmlFor="textColor">Text Color:</label>
    <input
      type="color"
      id="textColor"
      value={selectedTextColor}
      onChange={(event) => handleColorChange('textColor', event)}
    />

    <label htmlFor="bgColor">Background Color:</label>
    <input
      type="color"
      id="bgColor"
      value={selectedBgColor}
      onChange={(event) => handleColorChange('bgColor', event)}
    />
  </div>
  );
};

export default Settings;
