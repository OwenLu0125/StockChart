// hooks
import { useState } from 'react';
// components
import EditTradeModal from '../../editTradeModal/EditTradeModal';
import PublishModal from '../../publishModal/PublishModal';
// icons
import msgIcon from '../../../assets/message.svg';
import msgIconGray from '../../../assets/message-gray.svg';
// style
import './DailyItem.scss';

export const DailyItem = ({
  tradeId,
  listNumber,
  action,
  tradeTime,
  quantity,
  price,
  content,
  isPublic,
  setTodayTransactions,
}) => {
  const time = tradeTime.substr(11, 8);
  const [editModal, setEditModal] = useState(false);
  const [publicModal, setPublicModal] = useState(false);

  return (
    <>
      <li className='dailyItem regular-14'>
        <div>
          <p onClick={() => setEditModal(!editModal)}>#{listNumber}</p>
        </div>
        {action === 'buy' ? (
          <div className='buy'>買</div>
        ) : (
          <div className='sell'>賣</div>
        )}
        <div>{time}</div>
        <div>x{quantity}</div>
        <div className={action === 'buy' ? 'buy' : 'sell'}>${price}</div>
        <img
          src={isPublic ? msgIcon : msgIconGray}
          alt='message-icon'
          onClick={() => setPublicModal(!publicModal)}
        />
      </li>
      <EditTradeModal
        tradeId={tradeId}
        tradeAction={action}
        tradeTime={tradeTime}
        quantity={quantity}
        price={price}
        content={content}
        isShow={editModal}
        setIsShow={setEditModal}
        setTodayTransactions={setTodayTransactions}
      />
      <PublishModal
        tradeId={tradeId}
        action={action}
        tradeTime={tradeTime}
        quantity={quantity}
        price={price}
        content={content}
        isPublic={isPublic}
        isShow={publicModal}
        setIsShow={setPublicModal}
        setTodayTransactions={setTodayTransactions}
      />
    </>
  );
};
export default DailyItem;
