// hooks

//api
import { publishTweet, unpublishTweet } from '../../api/tweet';
// icons
import closeIcon from '../../assets/close.svg';
import buyIcon from '../../assets/buy.svg';
import sellIcon from '../../assets/sell.svg';
// style
import './PublishModal.scss';
// functions
import { formatDate } from '../../timeSwitcher/timeSwitcher';

const PublishModal = ({
  tradeId,
  action,
  tradeTime,
  quantity,
  price,
  content,
  isPublic,
  isShow,
  setIsShow,
  setTodayTransactions,
}) => {
  const time = tradeTime.substr(11, 8);

  // event handler
  const handleSetPublic = async () => {
    try {
      await publishTweet(tradeId);

      setTodayTransactions?.((trades) => {
        return trades.map((trade) => {
          if (trade.id === tradeId) {
            return {
              ...trade,
              is_public: true,
            };
          }
          return { ...trade };
        });
      });
    } catch (error) {
      console.log('公開交易紀錄失敗', error);
    }
  };

  const handleSetPrivate = async () => {
    try {
      await unpublishTweet(tradeId);

      setTodayTransactions?.((trades) => {
        return trades.map((trade) => {
          if (trade.id === tradeId) {
            return {
              ...trade,
              is_public: false,
            };
          }
          return { ...trade };
        });
      });
    } catch (error) {
      console.log('公開交易紀錄失敗', error);
    }
  };

  return (
    <>
      {isShow && (
        <div className='publishModal'>
          <div className='modal-overlay'></div>
          <div className='modal-container'>
            <div className='top'>
              <span className='bold-20'>單筆交易明細</span>
              <img
                className='closeImg'
                src={closeIcon}
                alt='close-icon'
                onClick={() => setIsShow(!isShow)}
              />
            </div>
            <div className='modalMain'>
              <div className='modalContent'>
                <div className='singleTrade'>
                  <ul className='formTitles bold-14'>
                    <li>類型</li>
                    <li>日期</li>
                    <li>交易量</li>
                    <li>成交價</li>
                  </ul>
                  <ul className='formCotent regular-14'>
                    <li>
                      <span>
                        <img
                          src={action === 'buy' ? buyIcon : sellIcon}
                          alt='trade-Icon'
                        />
                      </span>

                      {action === 'buy' ? (
                        <div className='buy'>買</div>
                      ) : (
                        <div className='sell'>賣</div>
                      )}
                    </li>
                    <li>
                      <p>{formatDate(tradeTime)}</p>
                      <p>{time}</p>
                    </li>
                    <li>x{quantity}</li>
                    <li className={action === 'buy' ? 'buy' : 'sell'}>
                      ${price}
                    </li>
                  </ul>
                </div>
                <div className='remark'>
                  <div className='bold-14'>備註</div>
                  <p className='regular-14'>{content}</p>
                </div>
                <div className='modalBtn'>
                  {isPublic ? (
                    <button
                      className='btn tertiary-button bold-16'
                      onClick={handleSetPrivate}
                    >
                      隱藏交易
                    </button>
                  ) : (
                    <button
                      className='btn primary-button bold-16'
                      onClick={handleSetPublic}
                    >
                      公開交易
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PublishModal;
