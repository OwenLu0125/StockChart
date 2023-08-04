// hooks
import { useState } from 'react';
// components
import DeleteBox from '../deleteBox/DeleteBox';
// icons
import userImg from '../../assets/user.jpg';
import replyArrow from '../../assets/reply-arrow.svg';
import optionIcon from '../../assets/options.svg';
//style
import './SingleReply.scss';
//others
import { formatTime } from '../../timeSwitcher/timeSwitcher';

const SingleReply = ({
  name,
  account,
  replyTo,
  date,
  content,
  userId,
  replyId,
  setReplies,
  setTweet,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className='singleReply'
      onClick={(e) => {
        if (e.target.className !== 'option' && isVisible === true)
          setIsVisible(!isVisible);
      }}
    >
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
        <span className='date regular-14'>{formatTime(date)}</span>
        <span className='option' onClick={() => setIsVisible(!isVisible)}>
          <img src={optionIcon} alt='option-icon' />
        </span>
      </div>

      <div className='replyTag'>
        <img src={replyArrow} alt='reply-arrow' />
        <p className='regular-14'>@{replyTo}</p>
      </div>

      <div className='tweetMsg'>
        <p className='regular-14'>{content}</p>
      </div>
      {isVisible && (
        <DeleteBox
          userId={userId}
          replyId={replyId}
          setReplies={setReplies}
          setVisible={setIsVisible}
          visible={isVisible}
          setTweet={setTweet}
        />
      )}
    </div>
  );
};

export default SingleReply;
