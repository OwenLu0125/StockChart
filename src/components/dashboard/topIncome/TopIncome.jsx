import React from 'react';
import './TopIncome.scss';

export const TopIncome = ({
  averageLossPoints,
  averageWinPoints,
  pAndL,// 總損益
  roundTrip, // 總趟次
  riskRatio, // 盈虧比
}) => {
  return (
    <>
      <div className='topIncomeContainer'>
        <div className='toatalIncome'>
          <div>整體總損益</div>
          <div>{pAndL}</div>
          <div>總交易量： {roundTrip}</div>
        </div>
        <div className='averageIncome'>
          <div className='average1'>
            <div>獲利係數</div>
            <div>{riskRatio ?? 'test'}</div>
          </div>
          <div className='average2'>
            <div>平均盈餘</div>
            <div>{averageLossPoints ?? 'test'}</div>
          </div>
          <div className='average3'>
            <div>平均盈虧</div>
            <div>{averageWinPoints ?? 'test'}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopIncome;
