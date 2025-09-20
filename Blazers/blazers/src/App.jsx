import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Title subTitle='Our Programs' title='What We Offer' />
      <Programs />
      <About />
      <Title subTitle='Gallery' title='Campus Photos' />
      <Campus />
      <Title subTitle='Testimonials' title='What Our Alumni Says' />
      <Testimonials />

    </>
  )
}

export default App
