import TopIncome from './topIncome/TopIncome.jsx';
import PieChartSection from '../../components/dashboard/pieChartSection/PieChartSection.jsx';
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
            <div className='pieChart'>
              <p>勝率：{winRate ?? 'test'}</p>
              <PieChartSection
                totalWinPoints={totalWinPoints}
                totalLossPoints={totalLossPoints}
              />
              <p>盈餘次數：{totalWinPoints ?? 'test'}</p>
              <p>盈虧次數：{totalLossPoints || 'test' }</p>
            </div>

          </div>
          <div className='rightChart'>
            <p>這是右邊的圖表區域</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashBoard;
