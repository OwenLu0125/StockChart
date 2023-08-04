// icons
import msgIcon from '../../assets/message.svg';
// style
import './HistoryForm.scss';
//others
import { formatDate } from '../../timeSwitcher/timeSwitcher';

const HistoryForm = ({ dailytrades, tradeSum }) => {
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
        {dailytrades.length === 0 && (
          <ul>
            <li>無交易紀錄</li>
            <li>無資料顯示</li>
          </ul>
        )}
        {dailytrades.map((trade, i) => {
          const winRate =
            trade.win_rate === null ||
            String(trade.win_rate).slice(2, 4) === '00'
              ? '0'
              : String(trade.win_rate).slice(2, 4);

          const riskRatio =
            trade.risk_ratio.slice(0, 4) === '0'
              ? '0.00'
              : trade.risk_ratio.slice(0, 4);

          return (
            <ul key={`trade-${i}`}>
              <li>{formatDate(trade.date)}</li>
              <li className={trade.netpandl.includes('-') ? 'red' : 'green'}>
                {trade.netpandl.includes('-')
                  ? trade.netpandl
                  : `+${trade.netpandl}`}
              </li>

              <li className='green'>{winRate}%</li>
              <li>{riskRatio}</li>
              <li>{trade.round_trip}</li>
              <li>{trade.wincount}</li>
              <li>{trade.losscount}</li>
              <li>
                <img src={msgIcon} alt='message-icon' />
              </li>
            </ul>
          );
        })}
      </div>
      <div className='subBody regular-14'>
        <ul>
          <li className='bold-14'>累積</li>
          <li
            className={
              String(tradeSum.netPAndL).includes('-') ? 'red' : 'green'
            }
          >
            {String(tradeSum.netPAndL).includes('-')
              ? tradeSum.netPAndL
              : `+${tradeSum.netPAndL}`}
          </li>
          <li></li>
          <li>{tradeSum.roundTrip}</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li className='bold-14'>平均</li>
          <li
            className={
              String(tradeSum.netPAndL).includes('-') ? 'red' : 'green'
            }
          >
            {String(tradeSum.netPAndL).includes('-')
              ? (tradeSum.netPAndL / dailytrades.length).toFixed(2)
              : `+${(tradeSum.netPAndL / dailytrades.length).toFixed(2)}`}
          </li>
          <li
            className={
              String(tradeSum.netPAndL).includes('-') ? 'red' : 'green'
            }
          >
            {Math.round(tradeSum.winRate * 100)}%
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li className='bold-14'>均口淨損益</li>
          <li
            className={
              String(tradeSum.netPAndL).includes('-') ? 'red' : 'green'
            }
          >
            {String(tradeSum.netPAndL).includes('-')
              ? (tradeSum.netPAndL / tradeSum.roundTrip).toFixed(2)
              : `+${(tradeSum.netPAndL / tradeSum.roundTrip).toFixed(2)}`}
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
