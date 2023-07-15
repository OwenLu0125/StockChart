import arrowIcon from '../../assets/arrow-green.svg';
import './DailySummary.scss';

const DailySummary = () => {
  return (
    <div className='dailySummary'>
      <div className='mainInfo'>
        <span className='title medium-14'>本日淨損益</span>
        <div className='sum'>
          <span className='bold-28'>$1,400</span>
          <span>
            <p className='medium-12'>勝率 +76%</p>
            <img src={arrowIcon} alt='bell-icon' />
          </span>
        </div>
      </div>
      <div className='detail regular-14'>
        <span>
          <p>總口數</p>
          <p>x1</p>
        </span>
        <span>
          <p>合計</p>
          <p>+6</p>
        </span>
        <span>
          <p>淨損益</p>
          <p>+7</p>
        </span>
        <span>
          <p>盈虧比</p>
          <p>0 : 6.00</p>
        </span>
        <span>
          <p>總量</p>
          <p>67,406</p>
        </span>
        <span>
          <p>高低差</p>
          <p>133</p>
        </span>
        <span>
          <p>5日均量</p>
          <p>86,765</p>
        </span>
        <span>
          <p>5日平均高低差</p>
          <p>86,765</p>
        </span>
      </div>
      <button className='btn primary-button bold-16'>儲存</button>
    </div>
  );
};

export default DailySummary;
