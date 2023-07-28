// imgs
import userImg from '../../assets/user.jpg';
import replyArrow from '../../assets/reply-arrow.svg';
//style
import './SingleReply.scss';

const SingleReply = () => {
  return (
    <div className='singleReply'>
      <div className='tweetTop'>
        <div className='userWidget'>
          <img className='userImg' src={userImg} alt='user-img' />
          <span className='userInfo'>
            <p className='bold-14'>Tylor Filan</p>
            <span className='verticalLine'></span>
            <p className='regular-14'>@tylor</p>
          </span>
        </div>
        <span className='regular-14'>2小時前</span>
      </div>

      <div className='replyTag'>
        <img src={replyArrow} alt='reply-arrow' />
        <p className='regular-14'>@tylor</p>
      </div>

      <div className='tweetMsg'>
        <p className='regular-14'>
          From the latest information from the Fed it is likely that there will
          be further hikes in interest rates, even if we are close to the peak.
          The period of disinflation is likely to occur in 2024.
        </p>
      </div>
    </div>
  );
};

export default SingleReply;
