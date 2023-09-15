import React from 'react';
import './index.css'; 

function Button({ label, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
