import PrimaryInput from '../../components/primaryInput/PrimaryInput';
import Header from '../../components/header/Header';
import DailySummary from '../../components/dailySummary/DailySummary';
import DailyRecord from '../../components/dailyRecord/DailyRecord';
import arrowIcon from '../../assets/arrow-purple.svg';
import './DiaryPage.scss';

const DiaryPage = () => {
  return (
    <>
      <Header />
      <div className='diaryMain'>
        <div className='collapse'>
          <span className='bold-16'>隱藏輸入表單</span>
          <img className='arrow' src={arrowIcon} alt='arrow-icon' />
        </div>
        <div className='inputSec'>
          <PrimaryInput
            label='Email'
            placeholder='請輸入資料'
            value=''
            onChange=''
          />
          <PrimaryInput
            label='Email'
            placeholder='請輸入資料'
            value=''
            onChange=''
          />
          <PrimaryInput
            label='Email'
            placeholder='請輸入資料'
            value=''
            onChange=''
          />
          <PrimaryInput
            label='Email'
            placeholder='請輸入資料'
            value=''
            onChange=''
          />
          <PrimaryInput
            label='Email'
            placeholder='請輸入資料'
            value=''
            onChange=''
          />
          <PrimaryInput
            label='Email'
            placeholder='請輸入資料'
            value=''
            onChange=''
          />
        </div>
        <div className='btnSec'>
          <button className='btn secondary-button bold-16'>載入資料</button>
          <button className='btn primary-button bold-16'>送出</button>
        </div>
        <div className='dailySec'>
          <div className='dailyDiagram'></div>
          <div className='listSec'>
            <DailyRecord />
            <DailySummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiaryPage;
