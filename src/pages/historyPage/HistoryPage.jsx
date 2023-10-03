// hooks
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
// components
import HistoryForm from '../../components/historyForm/HistoryForm';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
// context
import { useAuth } from '../../contexts/AuthContext';
// icons
import clockIcon from '../../assets/clock.svg';
import arrowIcon from '../../assets/arrow-down.svg';
import filterIcon from '../../assets/filter.svg';
import closeIcon from '../../assets/close.svg';
// api
import { getHistory } from '../../api/history';
// style
import 'react-datepicker/dist/react-datepicker.css';
import './HistoryPage.scss';

const HistoryPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, currentMember } = useAuth();
  const [isVisible, setIsVisible] = useState(false);

  // Get the first and last days of the month
  const date = new Date();

  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1);
  }

  function getFisrtDayOfNextMonth(year, month) {
    return new Date(year, month + 1, 1);
  }

  function getLastDayOfNextMonth(year, month) {
    return new Date(year, month + 2, 0);
  }

  function getFisrtDayOfPrevMonth(year, month) {
    return new Date(year, month - 1, 1);
  }

  function getLastDayOfPrevMonth(year, month) {
    return new Date(year, month, 0);
  }

  const firstDay = getFirstDayOfMonth(date.getFullYear(), date.getMonth());

  // useState
  const [startDate, setStartDate] = useState(firstDay);
  const [endDate, setEndDate] = useState(new Date());
  const [tradeHistory, setTradeHistory] = useState([]);
  const [historySum, setHistorySum] = useState({});

  const defaultStartdate = `${startDate.getFullYear()}-${
    String(startDate.getMonth() + 1).length === 2 ? '' : '0'
  }${startDate.getMonth() + 1}-${
    String(startDate.getDate()).length === 2 ? '' : '0'
  }${startDate.getDate()}`;

  const defaultEnddate = `${endDate.getFullYear()}-${
    String(endDate.getMonth() + 1).length === 2 ? '' : '0'
  }${endDate.getMonth() + 1}-${
    String(endDate.getDate() + 1).length === 2 ? '' : '0'
  }${endDate.getDate() + 1}`;

  const handleSearchHistory = async () => {
    try {
      const formatStartDate = `${startDate.getFullYear()}-${
        String(startDate.getMonth() + 1).length === 2 ? '' : '0'
      }${startDate.getMonth() + 1}-${
        String(startDate.getDate()).length === 2 ? '' : '0'
      }${startDate.getDate()}`;
      const formatEndDate = `${endDate.getFullYear()}-${
        String(endDate.getMonth() + 1).length === 2 ? '' : '0'
      }${endDate.getMonth() + 1}-${
        String(endDate.getDate()).length === 2 ? '' : '0'
      }${endDate.getDate()}`;

      const history = await getHistory({
        id: currentMember.id,
        startDate: formatStartDate,
        endDate: formatEndDate,
      });

      setTradeHistory(history.dailyTransactions);
      setHistorySum(history.historyData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextMonth = async () => {
    try {
      const fisrtDayOfNextMonth = getFisrtDayOfNextMonth(
        startDate.getFullYear(),
        startDate.getMonth()
      );

      const lastDayOfNextMonth = getLastDayOfNextMonth(
        startDate.getFullYear(),
        startDate.getMonth()
      );

      setStartDate(fisrtDayOfNextMonth);
      setEndDate(lastDayOfNextMonth);

      const formatStartDate = `${fisrtDayOfNextMonth.getFullYear()}-${
        String(fisrtDayOfNextMonth.getMonth() + 1).length === 2 ? '' : '0'
      }${fisrtDayOfNextMonth.getMonth() + 1}-${
        String(fisrtDayOfNextMonth.getDate()).length === 2 ? '' : '0'
      }${fisrtDayOfNextMonth.getDate()}`;
      const formatEndDate = `${lastDayOfNextMonth.getFullYear()}-${
        String(lastDayOfNextMonth.getMonth() + 1).length === 2 ? '' : '0'
      }${lastDayOfNextMonth.getMonth() + 1}-${
        String(lastDayOfNextMonth.getDate()).length === 2 ? '' : '0'
      }${lastDayOfNextMonth.getDate()}`;

      const history = await getHistory({
        id: currentMember.id,
        startDate: formatStartDate,
        endDate: formatEndDate,
      });

      setTradeHistory(history.dailyTransactions);
      setHistorySum(history.historyData);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrevMonth = async () => {
    try {
      const fisrtDayOfPrevMonth = getFisrtDayOfPrevMonth(
        startDate.getFullYear(),
        startDate.getMonth()
      );

      const lastDayOfPrevMonth = getLastDayOfPrevMonth(
        startDate.getFullYear(),
        startDate.getMonth()
      );

      setStartDate(fisrtDayOfPrevMonth);
      setEndDate(lastDayOfPrevMonth);

      const formatStartDate = `${fisrtDayOfPrevMonth.getFullYear()}-${
        String(fisrtDayOfPrevMonth.getMonth() + 1).length === 2 ? '' : '0'
      }${fisrtDayOfPrevMonth.getMonth() + 1}-${
        String(fisrtDayOfPrevMonth.getDate()).length === 2 ? '' : '0'
      }${fisrtDayOfPrevMonth.getDate()}`;
      const formatEndDate = `${lastDayOfPrevMonth.getFullYear()}-${
        String(lastDayOfPrevMonth.getMonth() + 1).length === 2 ? '' : '0'
      }${lastDayOfPrevMonth.getMonth() + 1}-${
        String(lastDayOfPrevMonth.getDate()).length === 2 ? '' : '0'
      }${lastDayOfPrevMonth.getDate()}`;

      const history = await getHistory({
        id: currentMember.id,
        startDate: formatStartDate,
        endDate: formatEndDate,
      });

      setTradeHistory(history.dailyTransactions);
      setHistorySum(history.historyData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getHistoryAsync = async () => {
      try {
        const history = await getHistory({
          id: currentMember.id,
          startDate: defaultStartdate,
          endDate: defaultEnddate,
        });

        setTradeHistory(history.dailyTransactions);
        setHistorySum(history.historyData);
      } catch (error) {
        console.error(error);
      }
    };
    getHistoryAsync();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return (
    <>
      <div className='historyPage'>
        <Navbar />
        <div className='historyBody'>
          <Header />
          <div className='historyMain'>
            <div className='dateFilter'>
              <div className='datePicker'>
                <img src={clockIcon} alt='clock-icon' />
                <DatePicker
                  className='picker'
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat='yyyy/MM/dd'
                  maxDate={new Date()}
                  showYearDropdown
                  scrollableYearDropdown
                />
                <img src={arrowIcon} alt='arrow-icon' />
              </div>
              <div className='datePicker'>
                <img src={clockIcon} alt='clock-icon' />
                <DatePicker
                  className='picker'
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat='yyyy/MM/dd'
                  maxDate={new Date()}
                  showYearDropdown
                  scrollableYearDropdown
                />
                <img src={arrowIcon} alt='arrow-icon' />
              </div>
              <button
                className='btn primary-button bold-16'
                onClick={handleSearchHistory}
              >
                查詢
              </button>
              <button
                className='btn secondary-button bold-16'
                onClick={handlePrevMonth}
              >
                上個月
              </button>
              <button
                className='btn secondary-button bold-16'
                onClick={handleNextMonth}
              >
                下個月
              </button>
            </div>
            <HistoryForm dailytrades={tradeHistory} tradeSum={historySum} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
