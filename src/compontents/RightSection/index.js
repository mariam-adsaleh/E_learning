import React from 'react'
import './index.css'; 
import student_image from '../../../src/images/student_laptop.jpg'
const index = () => {
  return (
    <div className="right_section">
    <img className='image1' src={student_image} alt="studentimage"/> 
    </div>
  )
}

export default index