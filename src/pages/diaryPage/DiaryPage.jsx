
// react
import { useState, useEffect } from 'react';
// package
import Swal from 'sweetalert2';
// component

import PrimaryInput from '../../components/primaryInput/PrimaryInput';
import Header from '../../components/header/Header';
import DailySummary from '../../components/dailySummary/DailySummary';
import DailyRecord from '../../components/dailyRecord/DailyRecord';

import Navbar from '../../components/navbar/Navbar';
// api
import { createDiary, getTransactions } from '../../api/diary';
// icon

import arrowIcon from '../../assets/arrow-purple.svg';
import './DiaryPage.scss';

const DiaryPage = () => {
  const [action, setAction] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [todayTransactions, setTodayTransactions] = useState('');
  const [switcher, setSwitcher] = useState(false); // 用於判斷是否有資料送出

  const handleSubmit = async () => {
    const res = await createDiary({
      action,
      quantity,
      price,
      transaction_date: transactionDate,
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
  };

  useEffect(() => {
    const dateString = new Date().toLocaleDateString();
    setDate(dateString);
    const transactionData = async () => {
      const res = await getTransactions({
        startDate: dateString,
        endDate: dateString,
      });
      console.log(res); // 觀察資料用

      const newData = res.data.transactions.map((item, index) => ({
        ...item,
        listNumber: index + 1,
      }));
      setTodayTransactions(newData);
    };
    transactionData();
  }, [switcher]);

  // 觀察資料用
  useEffect(() => {
    console.log(todayTransactions);
  }, [todayTransactions]);

  return (

    <div className='diaryContainer'>
      <div className='navbarSection'>
        <Navbar />
      </div>
      <div className='rightContainer'>
        <Header />
        <div className='collapse'>
          <span className='bold-16'>隱藏輸入表單</span>
          <img className='arrow' src={arrowIcon} alt='arrow-icon' />
        </div>
        <div className='inputSec'>
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
            label='交易日期'
            placeholder={date}
            value={transactionDate}
            onChange={setTransactionDate}
          />
          <PrimaryInput
            label='備註'
            placeholder='請輸入備註'
            value={description}
            onChange={setDescription}
          />
        </div>
        <div className='btnSec'>
          <button className='btn secondary-button bold-16'>載入資料</button>
          <button className='btn primary-button bold-16' onClick={handleSubmit}>
            送出
          </button>
        </div>
        <div className='dailySec'>
          <div className='dailyDiagram'></div>
          <div className='listSec'>
            <DailyRecord todayTransactions={todayTransactions} date={date} />
            <DailySummary />

          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;
