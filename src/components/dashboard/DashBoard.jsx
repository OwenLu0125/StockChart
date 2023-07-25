import TopIncome from './topIncome/TopIncome.jsx';
import './DashBoard.scss';
export const DashBoard = ({
  transactions,
  averageLossPoints,
  averageWinPoints,
  winRate,
  totalWinPoints,
  totalLossPoints,
  pAndL, // 總損益
  roundTrip, // 總趟次
  netPAndL,
  riskRatio, // 盈虧比
}) => {
  return (
    <>
      <div className='dashBoardContainer'>
        <TopIncome
          pAndL={pAndL}
          riskRatio={riskRatio}
          averageLossPoints={averageLossPoints}
          averageWinPoints={averageWinPoints}
          roundTrip={roundTrip}
        />
        <div className='chartSection'>
          <div className='leftChart'>
            <div className='chart'>
              <p>勝率：{winRate ?? "test"}</p>
              <p>盈餘次數：{totalWinPoints ?? "test"}</p>
              <p>盈虧次數：{totalLossPoints ?? "test"}</p>
            </div>
            <div className='chart'>
              <p>勝率%/天數</p>
            </div>
          </div>
          <div className='rightChart'>這是右邊的圖表區域</div>
        </div>
      </div>
    </>
  );
};
export default DashBoard;
