import React from 'react'
import './Programs.css'
import prg_1 from '../../assets/prg_1.jpg'
import prg_2 from '../../assets/prg_2.jpg'
import prg_3 from '../../assets/prg_3.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
const Programs = () => {
  return (
    <div className='programs container'>
        <div className="program">
            <img src={prg_1} alt="" />
            <div className="caption">
              <img src={program_icon_1} alt="" />
              <p>Bachelor Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={prg_3} alt="" />
            <div className="caption">
              <img src={program_icon_2} alt="" />
              <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={prg_2} alt="" />
            <div className="caption">
              <img src={program_icon_3} alt="" />
              <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Programs
