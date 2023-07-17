import React from 'react';
import './WhiteButton.scss';

const WhiteButton = ({ text }) => {
  return (
    <div>
      <button className='w-btn'>{text}</button>
    </div>
  );
};
export default WhiteButton;
