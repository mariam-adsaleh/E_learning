import React from 'react'
import LeftSection from '../LeftSection/index';
import RightSection from '../RightSection/index';
import LearningWebsites from '../LearningWebsites/index';
import CardSection from '../CardSection/index';
import './index.css'; 

const index = () => {
  return (
    <>
    <div className='page_section'>
    <LeftSection />
    <RightSection />
    </div>
    <LearningWebsites />
    <CardSection />
  </>
  )
}

export default index