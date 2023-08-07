// hooks
import { useState } from 'react';
import DatePicker from 'react-datepicker';
// components
import PrimaryInput from '../../components/primaryInput/PrimaryInput';
import TradeSelector from '../tradeSelector/TradeSelector';
//api
import { deleteTransaction, putTransaction } from '../../api/diary';
//icons
import closeIcon from '../../assets/close.svg';
import clockIcon from '../../assets/clock.svg';
import arrowIcon from '../../assets/arrow-down.svg';
// style
import './EditTradeModal.scss';
import 'react-datepicker/dist/react-datepicker.css';
// functions
import { formatDateForApi } from '../../timeSwitcher/timeSwitcher';

const EditTradeModal = ({
  tradeId,
  tradeAction,
  tradeTime,
  quantity,
  price,
  content,
  isShow,
  setIsShow,
  setTodayTransactions,
}) => {
  const actionType = tradeAction === 'buy' ? '買' : '賣';
  // states
  const [action, setAction] = useState(actionType);
  const [tradeQuantity, setTradeQuantity] = useState(quantity);
  const [tradePrice, setTradePrice] = useState(price);
  const [transactionDate, setTransactionDate] = useState(new Date(tradeTime));
  const [description, setDescription] = useState(content);

  const tradeType = () => {
    if (action === '買') {
      return 'buy';
    } else if (action === '賣') {
      return 'sell';
    } else {
      return '';
    }
  };

  // event handler
  const handleDeleteTrade = async () => {
    try {
      await deleteTransaction(tradeId);

      setTodayTransactions?.((trades) => {
        return trades.filter((trade) => {
          return trade.id !== tradeId;
        });
      });

      setIsShow(!isShow);
    } catch (error) {
      console.log('刪除交易失敗', error);
    }
  };

  const handlePostTrade = async () => {
    const tradeDate = formatDateForApi(transactionDate);
    const type = tradeType();
    const transaction = {
      action: type,
      quantity: tradeQuantity,
      price: tradePrice,
      transaction_date: tradeDate,
      description: description,
    };

    try {
      // const res = await putTransaction({
      //   id: tradeId,
      //   transaction,
      // });

      // console.log(res);

      // setTodayTransactions?.((trades) => {
      //   return trades.map((trade) => {
      //     if (trade.id === tradeId) {
      //       return {
      //         ...trade,
      //         action: type,
      //         quantity: tradeQuantity,
      //         price: tradePrice,
      //         transaction_date: tradeDate,
      //         description: description,
      //       };
      //     }
      //     return { ...trade };
      //   });
      // });

      // setTodayTransactions?.((trades) => {
      //   return trades.filter((trade) => {
      //     return trade.id !== tradeId;
      //   });
      // });

      setIsShow(!isShow);
    } catch (error) {
      console.log('刪除交易失敗', error);
    }
  };

  return (
    <>
      {isShow && (
        <div className='editTradeModal'>
          <div className='modal-overlay'></div>
          <div className='modal-container'>
            <div className='top'>
              <span className='bold-20'>修改交易資料</span>
              <img
                className='closeImg'
                src={closeIcon}
                alt='close-icon'
                onClick={() => setIsShow(!isShow)}
              />
            </div>
            <div className='modalMain'>
              <div className='inputGroup'>
                <div className='inputMain'>
                  <TradeSelector action={action} setAction={setAction} />
                  <div className='dateInput'>
                    <div className='label bold-14'>日期</div>
                    <div className='datePicker'>
                      <img src={clockIcon} alt='clock-icon' />
                      <DatePicker
                        className='picker'
                        selected={transactionDate}
                        onChange={(date) => setTransactionDate(date)}
                        dateFormat='yyyy/MM/dd HH:mm:ss'
                        maxDate={new Date()}
                        showYearDropdown
                        scrollableYearDropdown
                        showTimeSelect
                      />
                      <img src={arrowIcon} alt='arrow-icon' />
                    </div>
                  </div>
                  <PrimaryInput
                    label='價格'
                    placeholder='請輸入價格'
                    value={tradePrice}
                    onChange={setTradePrice}
                  />
                  <PrimaryInput
                    label='數量'
                    placeholder='請輸入數量'
                    value={tradeQuantity}
                    onChange={setTradeQuantity}
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
              </div>
              <div className='modalBtn'>
                <button
                  className='btn secondary-button bold-16'
                  onClick={handleDeleteTrade}
                >
                  刪除
                </button>
                <button
                  className='btn primary-button bold-16'
                  onClick={handlePostTrade}
                >
                  修改交易
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTradeModal;
