// component
import DailyItem from './dailyItem/DailyItem';
// icon
import clockIcon from '../../assets/clock.svg';
// import msgIcon from '../../assets/message.svg';
// style
import './DailyRecord.scss';

const DailyRecord = ({ todayTransactions }) => {
  console.log(todayTransactions);
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
        {Array.isArray(todayTransactions) &&
          todayTransactions.map((item) => (
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

// [
//   {
//     id: 116,
//     user_id: 1,
//     action: 'sell',
//     quantity: 666,
//     price: 777,
//     transaction_date: '2023-07-19T00:00:00.000Z',
//     description: 'owen test 1',
//     created_on: '2023-07-19T03:23:40.117Z',
//     updated_on: '2023-07-19T03:23:40.117Z',
//     is_public: false,
//   },
//   {
//     id: 117,
//     user_id: 1,
//     action: 'buy',
//     quantity: 111,
//     price: 222,
//     transaction_date: '2023-07-19T00:00:00.000Z',
//     description: 'owen test 222',
//     created_on: '2023-07-19T03:34:45.898Z',
//     updated_on: '2023-07-19T03:34:45.898Z',
//     is_public: false,
//   },
//   {
//     id: 118,
//     user_id: 1,
//     action: 'buy',
//     quantity: 222,
//     price: 333,
//     transaction_date: '2023-07-19T00:00:00.000Z',
//     description: 'owen test 333333333',
//     created_on: '2023-07-19T03:58:33.929Z',
//     updated_on: '2023-07-19T03:58:33.929Z',
//     is_public: false,
//   },
// ];
