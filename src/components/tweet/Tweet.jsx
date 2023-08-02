// hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// components
import ReplyModal from '../replyModal/ReplyModal';
//context
import { useId } from '../../contexts/IdContext';
//api
import { likeTweet, unlikeTweet } from '../../api/tweet';
// icons
import userImg from '../../assets/user.jpg';
import buyIcon from '../../assets/buy.svg';
import sellIcon from '../../assets/sell.svg';
import heartHollow from '../../assets/heart-hollow.svg';
import heartFilled from '../../assets/heart-filled.svg';
import commentIcon from '../../assets/comment.svg';
// style
import './Tweet.scss';

const Tweet = ({
  tweetId,
  name,
  account,
  tweetTime,
  content,
  action,
  date,
  quantity,
  price,
  likes,
  isLiked,
  replies,
  reSetTweets,
}) => {
  const [modal, setModal] = useState(false);
  const { checkItemId } = useId();
  const navigate = useNavigate();
  const dealTime = new Date(date);

  const handleId = () => {
    checkItemId(tweetId);
  };

  const handleLike = async () => {
    try {
      if (isLiked) {
        await unlikeTweet(tweetId);
        reSetTweets?.((prev) => {
          return prev.map((tweet) => {
            if (tweet.id === tweetId) {
              return {
                ...tweet,
                like_count: tweet.like_count - 1,
                is_liked: false,
              };
            }
            return { ...tweet };
          });
        });
      } else {
        await likeTweet(tweetId);
        reSetTweets?.((prev) => {
          return prev.map((tweet) => {
            if (tweet.id === tweetId) {
              return {
                ...tweet,
                like_count: Number(tweet.like_count) + 1,
                is_liked: true,
              };
            }
            return { ...tweet };
          });
        });
      }
    } catch (error) {
      console.error('liking failed:', error);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div
        className='tweet'
        onClick={(e) => {
          if (
            e.target.className !== 'like' &&
            e.target.className !== 'comment'
          ) {
            checkItemId(tweetId);
            navigate('/reply');
          }
        }}
      >
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
                    alt='trade-Icon'
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
              <li>x{quantity}</li>
              <li className={action === 'buy' ? 'buyPrice' : 'sellPrice'}>
                {price}
              </li>
            </ul>
          </div>
        </div>

        <div className='tweetControl'>
          <span className='likes'>
            <img
              className='like'
              src={isLiked ? heartFilled : heartHollow}
              alt='heart-Icon'
              onClick={handleLike}
            />
            <p className='medium-14'>{likes}</p>
          </span>
          <span className='verticalLine'></span>
          <span className='comments' onClick={handleId}>
            <img
              className='comment'
              src={commentIcon}
              alt='comment-Icon'
              onClick={toggleModal}
            />
            <p className='medium-14'>{replies}</p>
          </span>
        </div>
      </div>
      <ReplyModal
        isActivated={modal}
        toggle={toggleModal}
        reSetTweets={reSetTweets}
      />
    </>
  );
};

export default Tweet;
