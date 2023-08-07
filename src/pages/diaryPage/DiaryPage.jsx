// react
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
// package
import Swal from 'sweetalert2';
// component
import PrimaryInput from '../../components/primaryInput/PrimaryInput';
import Header from '../../components/header/Header';
import DailySummary from '../../components/dailySummary/DailySummary';
import DailyRecord from '../../components/dailyRecord/DailyRecord';
import Navbar from '../../components/navbar/Navbar';
import PositiveAndNegativeBarChart from '../../components/dashboard/PositiveAndNegativeBarChart/PositiveAndNegativeBarChart';
import TradeSelector from '../../components/tradeSelector/TradeSelector';
// context
import { useAuth } from '../../contexts/AuthContext';
// api
import { createDiary, getTodaysTransactionsData } from '../../api/diary';
// icons
import arrowIcon from '../../assets/arrow-purple.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';
import clockIcon from '../../assets/clock.svg';
//style
import './DiaryPage.scss';
import 'react-datepicker/dist/react-datepicker.css';
// functions
import { formatDateForApi } from '../../timeSwitcher/timeSwitcher';

const DiaryPage = () => {
  const [action, setAction] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [todayTransactions, setTodayTransactions] = useState('');
  const [lineChartData, setLineChartData] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [switcher, setSwitcher] = useState(false); // 用於判斷是否有資料送出
  const [dailyTradeSummary, setDailyTradeSummary] = useState('');

  const navigate = useNavigate();

  const { isAuthenticated, currentMember } = useAuth();
  const id = currentMember?.id;

  const tradeType = () => {
    if (action === '買') {
      return 'buy';
    } else if (action === '賣') {
      return 'sell';
    } else {
      return '';
    }
  };

  const handleSubmit = async () => {
    const tradeDate = formatDateForApi(transactionDate);
    const type = tradeType();

    try {
      const res = await createDiary({
        action: type,
        quantity,
        price,
        transaction_date: tradeDate,
        description,
      });
      if (res.status === 200) {
        Swal.fire({
          position: 'top',
          title: '日記創建成功!',
          icon: 'success',
          showConfirmButton: true,
        });
        setSwitcher((current) => !current);
      } else {
        Swal.fire({
          position: 'top',
          title: '日記創建失敗!',
          text: `${res.response.data.message}`,
          icon: 'error',
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.log('送出失敗', error);
    }
  };

  useEffect(() => {
    const dateString = new Date().toLocaleDateString(); // 2023/8/2
    setDate(dateString);
    const getLineChartData = async () => {
      const res = await getTodaysTransactionsData({
        id: id,
        date: date,
      });
      console.log(res); // 觀察資料用

      // const newData = res.transactions?.map((item, index) => ({
      //   ...item,
      //   listNumber: index + 1,
      // }));
      setTodayTransactions(res.transactions);
      setDailyTradeSummary(res.historyData);

      const temData = res.transactions?.map((item) => ({
        date: item.transaction_date.slice(5, 10),
        pandl: item.pandl ?? 0,
      }));
      setLineChartData(temData);
    };
    getLineChartData();
  }, [switcher]);

  // 觀察資料用
  useEffect(() => {
    console.log(lineChartData);
  }, [lineChartData]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className='diaryContainer'>
      <div className='navbarSection'>
        <Navbar />
      </div>
      <div className='rightContainer'>
        <Header />
        <div
          className={`collapse ${isCollapsed ? 'collapsed' : ''}`}
          onClick={() => setIsCollapsed(!isCollapsed)}>
          <span className='bold-16'>隱藏輸入表單</span>
          <img
            className={`arrow ${isCollapsed ? 'flipped' : ''}`}
            src={arrowIcon}
            alt='arrow-icon'
          />
        </div>
        <div
          className={`inputSec ${isCollapsed ? 'collapsed' : ''}`}
          style={{ display: isCollapsed ? 'none' : 'grid' }}>
          <PrimaryInput
            label='買/賣'
            placeholder='buy or sell'
            value={action}
            onChange={setAction}
          />
          <PrimaryInput
            label='數量'
            placeholder='請輸入數量'
            value={quantity}
            onChange={setQuantity}
          />
          <PrimaryInput
            label='價格'
            placeholder='請輸入價格'
            value={price}
            onChange={setPrice}
          />
          <PrimaryInput
            label='數量'
            placeholder='請輸入數量'
            value={quantity}
            onChange={setQuantity}
          />
        </div>
        <div className='remark'>
          <div className='label bold-14'>備註</div>
          <textarea
            className='modalText medium-14'
            value={description}
            placeholder='請輸入備註'
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div
          className={`btnSec ${isCollapsed ? 'collapsed' : ''}`}
          style={{ display: isCollapsed ? 'none' : 'flex' }}>
          <button className='btn secondary-button bold-16'>載入資料</button>
          <button className='btn primary-button bold-16' onClick={handleSubmit}>
            送出
          </button>
        </div>
        <div className='dailySec'>
          <div className='dailyDiagram'>
            <PositiveAndNegativeBarChart transactions={lineChartData} />
          </div>
          <div className='listSec'>
            <DailyRecord
              todayTransactions={todayTransactions}
              setTodayTransactions={setTodayTransactions}
              date={date}
            />
            <DailySummary dailyTradeSummary={dailyTradeSummary} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;
