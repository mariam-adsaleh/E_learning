import React from 'react'
import './index.css'; 
import Button from '../Button/index';

const index = () => {
  return (
    <div className="left_section">
    <h3> A New Way to Get Your</h3>
    <h1>Bachelor Degree 
    <h4>
    in
    </h4> Computer Science</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Proin vehicula eget metus sed dictum. Praesent scelerisque, 
     velit ac mattis fermentum, augue ex efficitur urna, 
     in faucibus libero velit quis tortor. 
     Donec hendrerit justo vitae tellus fringilla, at elementum mauris congue.
      Sed lacinia pellentesque magna, facilisis malesuada nisl sollicitudin vitae.
       Duis mattis feugiat nisi eu dignissim. </p>

    <Button label="Get Started" onClick={() => { /* Handle login button click */ }} />

    </div>
  )
}

export default index