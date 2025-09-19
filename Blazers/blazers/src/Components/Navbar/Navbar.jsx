import React from 'react'
import './Navbar.css'
import logo from '../../assets/log.png'
const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li><a href="#">Home</a></li>
  <li><a href="#">Programs</a></li>
  <li><a href="#">About us</a></li>
  <li><a href="#">Campus</a></li>
  <li><a href="#">Testimonials</a></li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
      
    </nav>
  )
}

export default Navbar
