// hooks
import { useNavigate } from 'react-router-dom';
// context
import { useDate } from '../../contexts/DateContext';
// icons
import detailIcon from '../../assets/detail.svg';
// style
import './HistoryForm.scss';
//others
import { formatDate } from '../../timeSwitcher/timeSwitcher';

const HistoryForm = ({ dailytrades, tradeSum }) => {
  const navigate = useNavigate();

  const netPAndLSum = tradeSum?.netPAndL === null ? '0' : tradeSum?.netPAndL;
  const itemNumber = dailytrades?.length === 0 ? 1 : dailytrades?.length;
  const roundTripSum = tradeSum?.roundTrip === 0 ? 1 : tradeSum?.roundTrip;
  const winRateSum = (tradeSum?.winRate * 100).toFixed(0);

  const { getChosenDate } = useDate();

  return (
    <div className='historyForm'>
      <div className='titleBody'>
        <ul className='bold-14'>
          <li>日期</li>
          <li>淨損益</li>
          <li>勝率％</li>
          <li>盈虧比</li>
          <li>總單數</li>
          <li>+單數</li>
          <li>-單數</li>
          <li>詳請</li>
        </ul>
      </div>
      <div className='mainBody regular-14'>
        {dailytrades?.length === 0 && (
          <ul className='noData'>
            <li>無交易紀錄</li>
            <li>無資料顯示</li>
          </ul>
        )}
        {dailytrades?.map((trade, i) => {
          const winRate = (trade?.win_rate * 100).toFixed(0);

          const riskRatio = Number(trade?.risk_ratio)?.toFixed(2);

          const netpandl = trade?.netpandl === null ? '0' : trade.netpandl;

          const date = trade?.date.substr(0, 10).replaceAll('-', '/');

          return (
            <ul
              key={`trade-${i}`}
              onClick={() => {
                getChosenDate(date);
                navigate('/daily-history');
              }}
            >
              <li>{date === null ? '0000/00/00' : date}</li>
              <li className={netpandl?.includes('-') ? 'red' : 'green'}>
                {netpandl?.includes('-') ? netpandl : `+${netpandl}`}
              </li>

              <li className='green'>{winRate === null ? '0' : winRate}%</li>
              <li>{riskRatio === null ? '0' : riskRatio}</li>
              <li>{trade?.round_trip === null ? '0' : trade?.round_trip}</li>
              <li>{trade?.wincount === null ? '0' : trade?.wincount}</li>
              <li>{trade?.losscount === null ? '0' : trade?.losscount}</li>
              <li>
                <img src={detailIcon} alt='detail-icon' />
              </li>
            </ul>
          );
        })}
      </div>
      <div className='subBody regular-14'>
        <ul>
          <li className='bold-14'>累積</li>
          <li className={String(netPAndLSum).includes('-') ? 'red' : 'green'}>
            {String(netPAndLSum).includes('-')
              ? netPAndLSum
              : `+${netPAndLSum}`}
          </li>
          <li></li>
          <li>{tradeSum?.roundTrip === null ? '0' : tradeSum?.roundTrip}</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li className='bold-14'>平均</li>
          <li
            className={
              String(tradeSum?.netPAndL).includes('-') ? 'red' : 'green'
            }
          >
            {String(netPAndLSum).includes('-')
              ? (netPAndLSum / itemNumber).toFixed(0)
              : `+${(netPAndLSum / itemNumber).toFixed(0)}`}
          </li>
          <li className='green'>{winRateSum === null ? '0' : winRateSum}%</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li className='bold-14'>均口淨損益</li>
          <li className={String(netPAndLSum).includes('-') ? 'red' : 'green'}>
            {String(netPAndLSum).includes('-')
              ? (netPAndLSum / roundTripSum).toFixed(0)
              : `+${(netPAndLSum / roundTripSum).toFixed(0)}`}
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default HistoryForm;
