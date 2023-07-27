import userImg from '../../assets/user.jpg';
import sellIcon from '../../assets/sell.svg';
import heartHollow from '../../assets/heart-hollow.svg';
import commentIcon from '../../assets/comment.svg';
import './Tweet.scss';

const Tweet = () => {
  return (
    <div className='tweet'>
      <div className='tweetMain'>
        <div className='tweetTop'>
          <div className='userWidget'>
            <img className='userImg' src={userImg} alt='user-img' />
            <span className='userInfo'>
              <p className='bold-14'>Tylor Filan</p>
              <p className='regular-14'>@tylor</p>
            </span>
          </div>
          <span className='regular-14'>2小時前</span>
        </div>

        <div className='tweetMsg'>
          <p className='regular-16'>
            From the latest information from the Fed it is likely that there
            will be further hikes in interest rates, even if we are close to the
            peak. The period of disinflation is likely to occur in 2024.{' '}
          </p>
        </div>

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
                <img src={sellIcon} alt='sell-Icon' />
              </span>
              <p>賣</p>
            </li>
            <li>
              <p>2013/07/15</p>
              <p>12:55:39</p>
            </li>
            <li>x1</li>
            <li>$17,083</li>
          </ul>
        </div>
      </div>

      <div className='tweetControl'>
        <span className='likes'>
          <img src={heartHollow} alt='heart-Icon' />
          <p className='medium-14'>54</p>
        </span>
        <span className='verticalLine'></span>
        <span className='comments'>
          <img src={commentIcon} alt='comment-Icon' />
          <p className='medium-14'>11</p>
        </span>
      </div>
    </div>
  );
};

export default Tweet;
