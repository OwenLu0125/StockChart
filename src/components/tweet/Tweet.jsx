// icons
import userImg from '../../assets/user.jpg';
import buyIcon from '../../assets/buy.svg';
import sellIcon from '../../assets/sell.svg';
import heartHollow from '../../assets/heart-hollow.svg';
import commentIcon from '../../assets/comment.svg';
import './Tweet.scss';

const Tweet = ({
  name,
  account,
  tweetTime,
  content,
  action,
  date,
  quantity,
  price,
  likes,
  replies,
}) => {
  const dealTime = new Date(date);
  return (
    <div className='tweet'>
      <div className='tweetMain'>
        <div className='tweetTop'>
          <div className='userWidget'>
            <img className='userImg' src={userImg} alt='user-img' />
            <span className='userInfo'>
              <p className='bold-14'>{`${
                name.slice(0, 1).toUpperCase() + name.slice(1)
              }`}</p>
              <p className='regular-14'>@{account}</p>
            </span>
          </div>
          <span className='regular-14'>{tweetTime}</span>
        </div>

        <div className='tweetMsg'>
          <p className='regular-16'>{content}</p>
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
                <img
                  src={action === 'buy' ? buyIcon : sellIcon}
                  alt='sell-Icon'
                />
              </span>
              {action === 'buy' ? (
                <p className='buy'>買</p>
              ) : (
                <p className='sell'>賣</p>
              )}
            </li>
            <li>
              <p>{`${dealTime.getFullYear()}/${
                dealTime.getMonth() + 1
              }/${dealTime.getDate()}`}</p>
              <p>{`${dealTime.getHours()}:${dealTime.getMinutes()}:${dealTime.getSeconds()}`}</p>
            </li>
            <li>x{quantity}</li>
            <li className={action === 'buy' ? 'buyPrice' : 'sellPrice'}>
              {price}
            </li>
          </ul>
        </div>
      </div>

      <div className='tweetControl'>
        <span className='likes'>
          <img src={heartHollow} alt='heart-Icon' />
          <p className='medium-14'>{likes}</p>
        </span>
        <span className='verticalLine'></span>
        <span className='comments'>
          <img src={commentIcon} alt='comment-Icon' />
          <p className='medium-14'>{replies}</p>
        </span>
      </div>
    </div>
  );
};

export default Tweet;
