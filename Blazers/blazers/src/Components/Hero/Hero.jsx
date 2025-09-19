import React from 'react'
import './Hero.css'
import small_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Ignite Your Potential, Blaze Your Own Path</h1>
        <p>With world-class education and unstoppable spirit, every Blazer builds a brighter tomorrow, shaping communities, inspiring change, and leaving a legacy of excellence.</p>
        <button className='btn'>Explore more <img src={small_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
