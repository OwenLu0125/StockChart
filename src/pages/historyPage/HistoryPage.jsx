import React, { useState } from 'react';
import HistoryForm from '../../components/historyForm/HistoryForm';
import Header from '../../components/header/Header';
import DatePicker from 'react-datepicker';
import clockIcon from '../../assets/clock.svg';
import arrowIcon from '../../assets/arrow-down.svg';
import 'react-datepicker/dist/react-datepicker.css';
import './HistoryPage.scss';

const HistoryPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <div className='historyBody'>
        <Header />
        <div className='historyMain'>
          <div className='dateFilter'>
            <div className='datePicker'>
              <img src={clockIcon} alt='clock-icon' />
              <DatePicker
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
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat='yyyy/MM/dd'
                maxDate={new Date()}
                showYearDropdown
                scrollableYearDropdown
              />
              <img src={arrowIcon} alt='arrow-icon' />
            </div>
            <button className='btn primary-button bold-16'>查詢</button>
            <button className='btn secondary-button bold-16'>上個月</button>
            <button className='btn secondary-button bold-16'>下個月</button>
          </div>
          <HistoryForm />
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
