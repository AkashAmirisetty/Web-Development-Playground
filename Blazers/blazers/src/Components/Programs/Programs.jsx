import React from 'react'
import './Programs.css'
import prg_1 from '../../assets/prg_1.jpg'
import prg_2 from '../../assets/prg_2.jpg'
import prg_3 from '../../assets/prg_3.jpg'
const Programs = () => {
  return (
    <div className='programs container'>
        <div className="program">
            <img src={prg_1} alt="" />
        </div>
        <div className="program">
            <img src={prg_3} alt="" />
        </div>
        <div className="program">
            <img src={prg_2} alt="" />
        </div>
    </div>
  )
}

export default Programs
