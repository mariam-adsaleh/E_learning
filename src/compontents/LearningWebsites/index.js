import React from "react";
import './index.css'; 

const text = ["Coursera", "Udemy", "Microsoft", "Google", "intel"];

const TextList = () => {
  return (
    <ul>
      {text.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default TextList;