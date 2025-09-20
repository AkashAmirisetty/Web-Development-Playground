import React from 'react'
import './Testimonials.css'
import next_btn from '../../assets/next-icon.png'
import back_btn from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'

const Testimonials = () => {
  return (
    <div className='testimonials container'>
      <img src={next_btn} alt="" className='next-btn'/>
      <img src={back_btn} alt="" className='back-btn'/>
      <div className="slider">
        <ul>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3></h3>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

      </div>
    </div>
  )
}

export default Testimonials
