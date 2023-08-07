// hooks
import { useState } from 'react';
// icons
import arrowIcon from '../../assets/arrow-down.svg';
// style
import './TradeSelector.scss';

const TradeSelector = ({ action, setAction }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='tradeSelector'>
      <div className='label bold-14'>類型</div>
      <div className='selector'>
        <input
          type='text'
          className='default medium-14'
          placeholder='請選擇類型'
          value={action}
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          onChange={(e) => setAction(e.target.value)}
        />
        {isVisible && (
          <div class='options medium-14'>
            <ul>
              <li
                onClick={() => {
                  setIsVisible(!isVisible);
                  setAction('買');
                }}
              >
                買
              </li>
              <li
                onClick={() => {
                  setIsVisible(!isVisible);
                  setAction('賣');
                }}
              >
                賣
              </li>
            </ul>
          </div>
        )}
        <img
          src={arrowIcon}
          alt='arrow-icon'
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        />
      </div>
    </div>
  );
};

export default TradeSelector;
