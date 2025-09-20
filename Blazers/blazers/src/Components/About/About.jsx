import React from 'react'
import './About.css'
import about_img from '../../assets/about-img.jpg'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about container'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT UAB</h3>
        <h2>Shaping Tomorrow’s Leaders Today</h2>
        <p>Embark on a transformative journey with UAB Blazers. Our innovative programs, world-class faculty, and supportive community empower students with the knowledge, skills, and confidence to make a lasting impact.</p>
        <p>With a focus on research, innovation, and real-world experience, UAB prepares Blazers to excel in their careers and serve their communities with purpose.</p>
        <p>Whether your goal is to lead in healthcare, technology, business, or education, UAB provides the pathway to turn ambition into achievement.</p>
      </div>
    </div>
  )
}

export default About
