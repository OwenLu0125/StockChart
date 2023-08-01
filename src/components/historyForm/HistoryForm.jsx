// icons
import msgIcon from '../../assets/message.svg';
// style
import './HistoryForm.scss';
//others
import { formatDate } from '../../timeSwitcher/timeSwitcher';

const title = [
  '日期',
  '淨損益',
  '勝率％',
  '盈虧比',
  '總單數',
  '+單數',
  '-單數',
  '早盤勝率',
  '早盤總單數',
  '夜盤勝率',
  '夜版總單數',
  '詳細',
];

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
              <li>+20</li>

              <li
                className={`${winRate === '0' ? 'blue' : 'green'} ${
                  winRate.includes('-') && 'red'
                } `}
              >
                {winRate}%
              </li>
              <li>{riskRatio}</li>
              <li>{Number(trade.win_count) + Number(trade.loss_count)}</li>
              <li>{trade.win_count}</li>
              <li>{trade.loss_count}</li>
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
          <li></li>
          <li>{tradeSum.winRate}</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li className='bold-14'>平均</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li className='bold-14'>均口淨損益</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li className='bold-14'>夏普率</li>
          <li></li>
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
