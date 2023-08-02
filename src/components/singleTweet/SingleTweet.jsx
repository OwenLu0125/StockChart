// hooks
import { useState } from 'react';
// components
import ReplyModal from '../replyModal/ReplyModal';
// api
import { likeTweet, unlikeTweet } from '../../api/tweet';
// icons
import userImg from '../../assets/user.jpg';
import buyIcon from '../../assets/buy.svg';
import sellIcon from '../../assets/sell.svg';
import heartHollow from '../../assets/heart-hollow.svg';
import heartFilled from '../../assets/heart-filled.svg';
import commentIcon from '../../assets/comment.svg';
// style
import './SingleTweet.scss';
import { formatTime } from '../../timeSwitcher/timeSwitcher';

const SingleTweet = ({ tweet, setTweet, setReplies }) => {
  const [modal, setModal] = useState(false);
  const date = tweet.transaction_date;
  const dealTime = new Date(date);
  const username = tweet.transaction_user_name;

  const handleLike = async () => {
    try {
      (await tweet.is_like) ? unlikeTweet(tweet.id) : likeTweet(tweet.id);
      setTweet((tweet) => {
        return {
          ...tweet,
          like_count: tweet.is_like
            ? Number(tweet.like_count) - 1
            : Number(tweet.like_count) + 1,
          is_like: !tweet.is_like,
        };
      });
    } catch (error) {
      console.error(error);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className='singleTweet'>
        <div className='tweetMain'>
          <div className='tweetTop'>
            <div className='userWidget'>
              <img className='userImg' src={userImg} alt='user-img' />
              <span className='userInfo'>
                <p className='bold-14'>{username}</p>
                <p className='regular-14'>@{tweet.transaction_user_account}</p>
              </span>
            </div>
            <span className='regular-14'>{formatTime(tweet.updated_on)}</span>
          </div>

          <div className='tweetMsg'>
            <p className='regular-18'>{tweet.description}</p>
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
                    src={tweet.action === 'buy' ? buyIcon : sellIcon}
                    alt='trade-Icon'
                  />
                </span>
                {tweet.action === 'buy' ? (
                  <p className='buy'>買</p>
                ) : (
                  <p className='sell'>賣</p>
                )}
              </li>
              <li>
                <p>{`${dealTime.getFullYear()}/${
                  String(dealTime.getMonth() + 1).length !== 2 ? '0' : ''
                }${dealTime.getMonth() + 1}/${
                  String(dealTime.getDate()).length !== 2 ? '0' : ''
                }${dealTime.getDate()}`}</p>
                <p>{`${
                  String(dealTime.getHours()).length !== 2 ? '0' : ''
                }${dealTime.getHours()}:${
                  String(dealTime.getMinutes()).length !== 2 ? '0' : ''
                }${dealTime.getMinutes()}:${
                  String(dealTime.getSeconds()).length !== 2 ? '0' : ''
                }${dealTime.getSeconds()}`}</p>
              </li>
              <li>x{tweet.quantity}</li>
              <li className={tweet.action === 'buy' ? 'buyPrice' : 'sellPrice'}>
                ${tweet.price}
              </li>
            </ul>
          </div>
        </div>

        <div className='tweetControl'>
          <span className='likes'>
            <img
              src={tweet.is_like ? heartFilled : heartHollow}
              alt='heart-Icon'
              onClick={handleLike}
            />
            <p className='medium-14'>{tweet.like_count}</p>
          </span>
          <span className='verticalLine'></span>
          <span className='comments'>
            <img src={commentIcon} alt='comment-Icon' onClick={toggleModal} />
            <p className='medium-14'>{tweet.replies_count}</p>
          </span>
        </div>
      </div>
      <ReplyModal
        isActivated={modal}
        toggle={toggleModal}
        setTweet={setTweet}
        setReplies={setReplies}
      />
    </>
  );
};

export default SingleTweet;
