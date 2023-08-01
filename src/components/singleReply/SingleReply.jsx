// imgs
import userImg from '../../assets/user.jpg';
import replyArrow from '../../assets/reply-arrow.svg';
//style
import './SingleReply.scss';
//others
import { formatTime } from '../../timeSwitcher/timeSwitcher';

const SingleReply = ({ name, account, replyTo, date, content }) => {
  return (
    <div className='singleReply'>
      <div className='tweetTop'>
        <div className='userWidget'>
          <img className='userImg' src={userImg} alt='user-img' />
          <span className='userInfo'>
            <p className='bold-14'>{`${
              name.slice(0, 1).toUpperCase() + name.slice(1)
            }`}</p>
            <span className='verticalLine'></span>
            <p className='regular-14'>@{account}</p>
          </span>
        </div>
        <span className='regular-14'>{formatTime(date)}</span>
      </div>

      <div className='replyTag'>
        <img src={replyArrow} alt='reply-arrow' />
        <p className='regular-14'>@{replyTo}</p>
      </div>

      <div className='tweetMsg'>
        <p className='regular-14'>{content}</p>
      </div>
    </div>
  );
};

export default SingleReply;
