import TopIncome from './topIncome/TopIncome.jsx';
import './DashBoard.scss';
export const DashBoard = () => {
  return (
    <>
    <div className='dashBoardContainer'>

      <TopIncome />
      <div className='chartSection'></div>
      <h1>DashBoard</h1>
    </div>
    </>
  );
};
export default DashBoard;
