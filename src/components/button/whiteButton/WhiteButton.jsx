import React from 'react';
import './WhiteButton.scss';

const WhiteButton = ({ text, onClick }) => {
  return (
    <div>
      <button className='w-btn' onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
export default WhiteButton;
