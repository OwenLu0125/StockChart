import msgIcon from '../../../assets/message.svg';
import './DailyItem.scss';

export const DailyItem = ({ listNumber, action, created_on, quantity, price }) => {
  return (
    <>
      <li>
        <p className='regular-14'>#{listNumber}</p>
        <p className='regular-14'>{action}</p>
        <p className='regular-14'>12:55</p>
        <p className='regular-14'>{quantity}</p>
        <p className='regular-14'>{price}</p>
        <img src={msgIcon} alt='message-icon' />
      </li>
    </>
  );
};
export default DailyItem;