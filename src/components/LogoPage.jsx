import React from 'react'
import './LogoPage.css'
import Settings from './Settings';


const LogoPage = ( { onColorChange } ) => {
  // const handleTextColorChange = (color) => {
  //   console.log('Text color changed:', color);
  // }
  return (
    <div className='container'>
        <div>
            <img src="https://scienceview.info/images/header.gif" alt="" />
            
        </div>
        <div className='search-button'>
            <input className='input' type="text" placeholder='Search...' />
            <button className='btn'>
            <i className="ri-search-line btnLogo"></i>
            </button>
        </div>
        {/* <Settings onChangeTextColor={handleTextColorChange} /> */}
        <Settings  onColorChange={onColorChange} />
    </div>
  )
}

export default LogoPage