import React from 'react';
import './TopIncome.scss';

export const TopIncome = ({
  averageLossPoints,
  averageWinPoints,
  pAndL, // 總損益
  roundTrip, // 總趟次
  riskRatio, // 盈虧比
}) => {
  return (
    <>
      <div className='topIncomeContainer'>
        <div className='toatalIncome'>
          <div className='medium-14'>整體總損益</div>
          <div className='bold-28 panl'>${pAndL || 40254}</div>
          <div className='regular-12'>總交易量： {roundTrip}</div>
        </div>
        <div className='averageIncome'>
          <div className='average1'>
            <div className='medium-14'>獲利係數</div>
            <div className='bold-28 context1'>{riskRatio || 3.05}</div>
          </div>
          <div className='average2'>
            <div className='medium-14'>平均獲利</div>
            <div className='bold-28 context2'>
              {averageWinPoints || '$439,082'}
            </div>
          </div>
          <div className='average3'>
            <div className='medium-14'>平均虧損</div>
            <div className='bold-28 context3'>
              {averageLossPoints || '$393,200'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//   <div>{averageLossPoints ?? 'averageLossPoints'}</div>
export default TopIncome;
