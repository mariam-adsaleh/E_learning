import React from 'react'
import './index.css'; 
import Button from '../Button/index';

const index = () => {
  const buttonStyle={
    marginLeft: '40px',
    backgroundColor:'black',
    color: 'white', 
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };
  return (
    <div className="left_section">
    <p>
    A New Way to Get Your <br /><span className="highlighted">Bachelor Degree </span><br />in<br /> <span className="highlighted">Computer Science<br /></span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Proin vehicula eget metus sed dictum. Praesent scelerisque, 
     velit ac mattis fermentum, augue ex efficitur urna, 
     in faucibus libero velit quis tortor. 
    </p>
    <Button label="Get Started" onClick={() => {  }} />
    <button style={buttonStyle}  onClick={() => {  }} >
      Watch Video
    </button>
    </div>
  )
}

export default index