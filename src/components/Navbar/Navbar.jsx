import React, { useState } from 'react'
import a from './Navbar.module.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './NavPages/About';
import Home from './NavPages/Home';
import Writers from './NavPages/Writers';
import Downloads from './NavPages/Downloads';
import ContactUs from './NavPages/ContactUs';
import Gallery from './NavPages/Gallery';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("#Home");
  
  return (
    <Router className={a.container}>
      <div>
        <ul className={a.ul}>
          
      <li>
        <Link
          className={currentPage === "#Home" ? a.aActive : a.a}
          href="#Home"
          onClick={() => setCurrentPage("#Home")}
          to='/'
        >
         Home
        </Link>
      </li>
      <li>
        <Link
          className={currentPage === "#About" ? a.aActive : a.a}
          href="#About"
          onClick={() => setCurrentPage("#About")}
          to='/about'
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={currentPage === "#Writers" ? a.aActive : a.a}
          href="#Writers"
          onClick={() => setCurrentPage("#Writers")}
          to='/writers'
        >
          Writers
        </Link>
      </li>
      <li>
        <Link
          className={currentPage === "#Downloads" ? a.aActive : a.a}
          href="#Downloads"
          onClick={() => setCurrentPage("#Downloads")}
          to='/downloads'
        >
          Downloads
        </Link>
      </li>
      <li>
        <Link
          className={currentPage === "#Gallery" ? a.aActive : a.a}
          href="#Gallery"
          onClick={() => setCurrentPage("#Gallery")}
          to='/gallery'
        >
          Gallery
        </Link>
      </li>
      <li>
        <Link
          className={currentPage === "#ContactUs" ? a.aActive : a.a}
          href="#ContactUs"
          onClick={() => setCurrentPage("#ContactUs")}
          to='/contactus'
        >
          Contact Us
        </Link>
      </li>
    </ul>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/writers' element={<Writers />} />
      <Route path='/downloads' element={<Downloads />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/contactus' element={<ContactUs />} />
    </Routes>
    </div>
    </Router>
  )
}

export default Navbar