import React from 'react';
import './PurpleButton.scss';

const PurpleButton = ({text}) => {
  return (
    <div>
      <button className='p-btn'>{text}</button>
    </div>
  );
};
export default PurpleButton;
