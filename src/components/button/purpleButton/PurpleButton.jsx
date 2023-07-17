import React from 'react';
import './PurpleButton.scss';

const PurpleButton = ({ text, onClick }) => {
  return (
    <div>
      <button className='p-btn' onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
export default PurpleButton;
