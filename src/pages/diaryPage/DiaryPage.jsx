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
import {
  formatDate,
  formatDateForApi,
  formatDateForApiWithoutTime,
} from '../../timeSwitcher/timeSwitcher';

const DiaryPage = () => {
  const [action, setAction] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [todayTransactions, setTodayTransactions] = useState('');
  const [lineChartData, setLineChartData] = useState([]);
  const [switcher, setSwitcher] = useState(false); // 用於判斷是否有資料送出
  const [dailyTradeSummary, setDailyTradeSummary] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [trandeInputDate, setTrandeInputDate] = useState(new Date()); // 輸入表單選擇日期
  const [historyDate, setHistoryDate] = useState(new Date()); // 交易紀錄選擇日期和API送出日期

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
    const tradeDate = formatDate(trandeInputDate);
    const tradeDateApi = formatDateForApi(trandeInputDate);
    const type = tradeType();

    try {
      const res = await createDiary({
        action: type,
        quantity,
        price,
        transaction_date: tradeDateApi,
        description,
      });
      if (res.status === 200) {
        Swal.fire({
          position: 'top',
          title: '日記創建成功!',
          icon: 'success',
          showConfirmButton: true,
        });
        setHistoryDate(new Date(tradeDate));
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
    const dateApi = formatDateForApiWithoutTime(historyDate);
    console.log(dateApi);
    const getLineChartData = async () => {
      const res = await getTodaysTransactionsData({
        id: id,
        date: dateApi,
      });
      console.log(res); // 觀察資料用

      setTodayTransactions(res.transactions);
      setDailyTradeSummary(res.historyData);

      const temData = res.transactions
        ?.map((item) => {
          if (
            item.status === 'closed' &&
            item.category === 'closing_position'
          ) {
            return {
              date: item.transaction_date.slice(5, 10),
              pandl: item.pandl ?? 0,
            };
          }
          return null;
        })
        .filter(Boolean); // 使用 filter 方法來過濾掉值為 null 的項目

      setLineChartData(temData);
    };
    getLineChartData();
  }, [switcher, historyDate]);

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
    <div className='diaryPage'>
      <Navbar />
      <div className='diaryBody'>
        <Header />
        <div className='diaryMain'>
          <div
            className={`collapse ${isCollapsed ? 'collapsed' : ''}`}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className='bold-16'>輸入表單</span>
            <img
              className={`arrow ${isCollapsed ? 'flipped' : ''}`}
              src={arrowIcon}
              alt='arrow-icon'
            />
          </div>
          <div
            className={`inputSec ${isCollapsed ? 'collapsed' : ''}`}
            style={{ display: isCollapsed ? 'none' : 'grid' }}
          >
            <TradeSelector action={action} setAction={setAction} />
            <div className='dateInput'>
              <div className='label bold-14'>日期</div>
              <div className='datePicker'>
                <img src={clockIcon} alt='clock-icon' />
                <DatePicker
                  className='picker'
                  selected={trandeInputDate}
                  onChange={(date) => setTrandeInputDate(date)}
                  dateFormat='yyyy/MM/dd HH:mm:ss'
                  maxDate={new Date()}
                  showYearDropdown
                  scrollableYearDropdown
                  showTimeSelect
                />
                <img src={arrowDownIcon} alt='arrow-icon' />
              </div>
            </div>
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
          <div
            className={`remark ${isCollapsed ? 'collapsed' : ''}`}
            style={{ display: isCollapsed ? 'none' : 'flex' }}
          >
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
            style={{ display: isCollapsed ? 'none' : 'flex' }}
          >
            <button className='btn secondary-button bold-16'>載入資料</button>
            <button
              className='btn primary-button bold-16'
              onClick={handleSubmit}
            >
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
                historyDate={historyDate}
                setHistoryDate={setHistoryDate}
                setSwitcher={setSwitcher}
              />
              <DailySummary dailyTradeSummary={dailyTradeSummary} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;
