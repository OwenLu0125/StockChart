// hooks
import DatePicker from 'react-datepicker';
// component
import DailyItem from './dailyItem/DailyItem';
// icon
import clockIcon from '../../assets/clock.svg';
import arrowIcon from '../../assets/arrow-down.svg';
// style
import './DailyRecord.scss';
import 'react-datepicker/dist/react-datepicker.css';

const DailyRecord = ({
  todayTransactions,
  setTodayTransactions,
  setSwitcher,
  historyDate,
  setHistoryDate,
}) => {
  console.log(todayTransactions);
  return (
    <>
      <div className='dailyRecord'>
        <div className='titleSec'>
          <div className='medium-14'>交易日期紀錄</div>
          <div className='datePicker'>
            <img src={clockIcon} alt='clock-icon' />
            <DatePicker
              className='picker'
              selected={historyDate}
              onChange={(date) => setHistoryDate(date)}
              dateFormat='yyyy/MM/dd'
              maxDate={new Date()}
              showYearDropdown
              scrollableYearDropdown
            />
            <img src={arrowIcon} alt='arrow-icon' />
          </div>
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
              setSwitcher={setSwitcher}
              setHistoryDate={setHistoryDate}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DailyRecord;
