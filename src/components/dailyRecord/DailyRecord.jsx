// component
import DailyItem from './dailyItem/DailyItem';
// icon
import clockIcon from '../../assets/clock.svg';
// style
import './DailyRecord.scss';

const DailyRecord = ({ todayTransactions, setTodayTransactions, date }) => {
  console.log(todayTransactions);
  return (
    <>
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
          {todayTransactions?.map?.((item, i) => (
            <DailyItem
              key={item.id}
              tradeId={item.id}
              listNumber={i + 1}
              action={item.action}
              tradeTime={item.transaction_date}
              quantity={item.quantity}
              price={item.price}
              content={item.description}
              isPublic={item.is_public}
              setTodayTransactions={setTodayTransactions}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DailyRecord;
