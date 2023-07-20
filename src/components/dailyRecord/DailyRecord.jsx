// component
import DailyItem from './dailyItem/DailyItem';
// icon
import clockIcon from '../../assets/clock.svg';
// style
import './DailyRecord.scss';

const DailyRecord = ({ todayTransactions, date }) => {
  console.log(todayTransactions);
  return (
    <div className='dailyRecord'>
      <div className='titleSec'>
        <span className='medium-14'>本日交易紀錄</span>
        <span>
          <img src={clockIcon} alt='clock-icon' />
          <p className='medium-12'>日期</p>
          <p className='medium-12'>{date}</p>
        </span>
      </div>
      <ul className='tradeList'>
        {todayTransactions?.map?.((item) => (
          <DailyItem
            key={item.id}
            listNumber={item.listNumber}
            action={item.action}
            created_on={item.created_on}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default DailyRecord;