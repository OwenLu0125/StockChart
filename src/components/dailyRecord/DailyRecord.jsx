import clockIcon from '../../assets/clock.svg';
import msgIcon from '../../assets/message.svg';
import './DailyRecord.scss';

const DailyRecord = () => {
  return (
    <div className='dailyRecord'>
      <div className='titleSec'>
        <span className='medium-14'>本日交易紀錄</span>
        <span>
          <img src={clockIcon} alt='clock-icon' />
          <p className='medium-12'>日期</p>
          <p className='medium-12'>2023/07/15</p>
        </span>
      </div>
      <ul className='tradeList'>
        <li>
          <p className='regular-14'>#1</p>
          <p className='regular-14'>賣</p>
          <p className='regular-14'>12:55:23</p>
          <p className='regular-14'>x1</p>
          <p className='regular-14'>$17,083</p>
          <img src={msgIcon} alt='message-icon' />
        </li>
        <li>
          <p className='regular-14'>#1</p>
          <p className='regular-14'>賣</p>
          <p className='regular-14'>12:55:23</p>
          <p className='regular-14'>x1</p>
          <p className='regular-14'>$17,083</p>
          <img src={msgIcon} alt='message-icon' />
        </li>
        <li>
          <p className='regular-14'>#1</p>
          <p className='regular-14'>賣</p>
          <p className='regular-14'>12:55:23</p>
          <p className='regular-14'>x1</p>
          <p className='regular-14'>$17,083</p>
          <img src={msgIcon} alt='message-icon' />
        </li>
        <li>
          <p className='regular-14'>#1</p>
          <p className='regular-14'>賣</p>
          <p className='regular-14'>12:55:23</p>
          <p className='regular-14'>x1</p>
          <p className='regular-14'>$17,083</p>
          <img src={msgIcon} alt='message-icon' />
        </li>
        <li>
          <p className='regular-14'>#1</p>
          <p className='regular-14'>賣</p>
          <p className='regular-14'>12:55:23</p>
          <p className='regular-14'>x1</p>
          <p className='regular-14'>$17,083</p>
          <img src={msgIcon} alt='message-icon' />
        </li>
        <li>
          <p className='regular-14'>#1</p>
          <p className='regular-14'>賣</p>
          <p className='regular-14'>12:55:23</p>
          <p className='regular-14'>x1</p>
          <p className='regular-14'>$17,083</p>
          <img src={msgIcon} alt='message-icon' />
        </li>
      </ul>
    </div>
  );
};

export default DailyRecord;
