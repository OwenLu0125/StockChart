import TopIncome from './topIncome/TopIncome.jsx';
import PieChartSection from '../../components/dashboard/pieChartSection/PieChartSection.jsx';
import './DashBoard.scss';
export const DashBoard = ({
  averageLossPoints,
  averageWinPoints,
  winRate,
  totalWinPoints,
  totalLossPoints,
  winCount,
  lossCount,
  pAndL, // 總損益
  roundTrip, // 總趟次
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
              <div className='bold-16'>勝率：{winRate ?? 'winRate'}</div>
              <div className='line'></div>
              <PieChartSection
                totalWinPoints={totalWinPoints}
                totalLossPoints={totalLossPoints}
              />
              <div>獲利次數：{winCount || 'winCount'}</div>
              <div>虧損次數：{lossCount || 'lossCount'}</div>
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
