import React from 'react';
import Card from '../Card/index';
import './index.css';
import udemylogo from '../../../src/images/udemylogo.png';
import freecodecamplogo from '../../../src/images/free-code-camp-logo.webp';
import codecademylogo from '../../../src/images/codecademylogo.png';
import courseralogo from '../../../src/images/coursera.png';
import simplilearnlogo from '../../images/Simplilearn_Logo.jpg';



const CardSection = () => {
  const cardsData = [
    {
      title: 'Learning that lasts',
      imageUrl:  udemylogo,
      description: 'Trusted by over 14,400 companies and millions of learners around the world',
    },
    {
      title: 'Learn to code — for free',
      imageUrl: freecodecamplogo,
      description: 'Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including: Apple, Google, Microsoft..',
    },
    {
        title: 'Start coding in seconds',
        imageUrl: codecademylogo,
        description: 'Go ahead, give it a try. Our hands-on learning environment means you will be writing real code from your very first lesson.',
      },
      {
        title: 'Learn without limits',
        imageUrl: courseralogo,
        description: 'Start, switch, or advance your career with more than 5,800 courses, Professional Certificates, and degrees from world-class universities and companies',
      },
      {
        title: 'World’s #1 online Bootcamp',
        imageUrl: simplilearnlogo,
        description: '5,000,000 careers advanced 1,500 live classes every month 85% report career benefits including promotion or a new job',
      },
  
  ];

  return (
    <div className={`card-section centered`}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardSection;
