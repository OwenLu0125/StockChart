// react
import { useState } from 'react';
// package
import axios from 'axios';
// component
import PrimaryInput from '../../components/primaryInput/PrimaryInput';
import Header from '../../components/header/Header';
import DailySummary from '../../components/dailySummary/DailySummary';
import DailyRecord from '../../components/dailyRecord/DailyRecord';
// icon
import arrowIcon from '../../assets/arrow-purple.svg';
// style
import './DiaryPage.scss';

const DiaryPage = () => {
  const [action, setAction] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async() => {

  };

  return (
    <>
      <Header />
      <div className='diaryMain'>
        <div className='collapse'>
          <span className='bold-16'>隱藏輸入表單</span>
          <img className='arrow' src={arrowIcon} alt='arrow-icon' />
        </div>
        <div className='inputSec'>
          <PrimaryInput
            label='action'
            placeholder='請輸入資料'
            value={action}
            onChange={setAction}
          />
          <PrimaryInput
            label='quantity'
            placeholder='請輸入資料'
            value={quantity}
            onChange={setQuantity}
          />
          <PrimaryInput
            label='price'
            placeholder='請輸入資料'
            value={price}
            onChange={setPrice}
          />
          <PrimaryInput
            label='transaction_date'
            placeholder='請輸入資料'
            value={transactionDate}
            onChange={setTransactionDate}
          />
          <PrimaryInput
            label='description'
            placeholder='請輸入資料'
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
        <DailySummary />
        <div className='dailySec'>
          <div className='dailyDiagram'></div>
          <div className='listSec'>
            <DailyRecord />
            <DailySummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiaryPage;
