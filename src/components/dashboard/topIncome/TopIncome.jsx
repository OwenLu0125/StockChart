import React from 'react';
import './TopIncome.scss';

export const TopIncome = () => {
  return (
    <>
      <div className='topIncomeContainer'>
        <div className='toatalIncome'>
          <div>整體總損益</div>
          <div>$1,400,000</div>
          <div>總交易量： 127</div>
        </div>
        <div className='averageIncome'>
          <div className='average1'>
            <div>獲利係數</div>
            <div>3.19</div>
          </div>
          <div className='average2'>
            <div>平均盈餘</div>
            <div>$439,082</div>
          </div>
          <div className='average3'>
            <div>平均盈虧</div>
            <div>$393,200</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopIncome;
