import TopIncome from './topIncome/TopIncome.jsx';
import './DashBoard.scss';
export const DashBoard = ({
  transactions,
  averageLossPoints,
  averageWinPoints,
  winRate,
  totalWinPoints,
  totalLossPoints,
  pAndL,
  roundTrip,
  netPAndL,
  riskRatio,
}) => {

  return (
    <>
      <div className='dashBoardContainer'>
        <TopIncome />
        <div className='chartSection'>
          <div className='leftChart'>
            <div className='chart'>勝率%/交易量</div>
            <div className='chart'>勝率%/天數</div>
          </div>
          <div className='rightChart'>這是右邊的圖表區域</div>
        </div>
      </div>
    </>
  );
};
export default DashBoard;
