// hooks
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
// components
import ReplyModal from '../replyModal/ReplyModal';
import UnpublishBox from '../unpublishBox/UnpublishBox';
//context
import { useId } from '../../contexts/IdContext';
//api
import { likeTweet, unlikeTweet } from '../../api/tweet';
// icons
import buyIcon from '../../assets/buy.svg';
import sellIcon from '../../assets/sell.svg';
import heartHollow from '../../assets/heart-hollow.svg';
import heartFilled from '../../assets/heart-filled.svg';
import commentIcon from '../../assets/comment.svg';
import optionIcon from '../../assets/options.svg';
// style
import './Tweet.scss';

const Tweet = React.forwardRef(
  (
    {
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
      activeTab,
      avatar,
    },
    ref
  ) => {
    const [modal, setModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const { checkItemId } = useId();
    const navigate = useNavigate();

    const handleId = () => {
      checkItemId(tweetId);
    };

    // useMutation - start //
    const queryClient = useQueryClient();
    const unLikePostMutation = useMutation({
      mutationFn: async (id) => {
        return await unlikeTweet(id);
      },
      onSuccess: () => {
        queryClient.invalidateQueries('/posts');
      },
    });

    const likePostMutation = useMutation({
      mutationFn: async (id) => {
        return await likeTweet(id);
      },
      onSuccess: () => {
        queryClient.invalidateQueries('/posts');
      },
    });

    // useMutation - end //

    const handleLike = async () => {
      try {
        if (isLiked) {
          unLikePostMutation.mutate(tweetId);
        } else {
          likePostMutation.mutate(tweetId);
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
        {ref ? (
          <div
            ref={ref}
            className='tweet'
            onClick={(e) => {
              if (
                e.target.className !== 'like' &&
                e.target.className !== 'comment' &&
                e.target.className !== 'option' &&
                e.target.className !== 'optionIcon' &&
                e.target.innerText !== '隱藏公開'
              ) {
                checkItemId(tweetId);
                navigate('/reply');
              } else if (
                e.target.innerText !== '隱藏公開' &&
                isVisible === true
              ) {
                setIsVisible(!isVisible);
              }
            }}
          >
            <div className='tweetMain'>
              <div className='tweetTop'>
                <div className='userWidget'>
                  <img className='userImg' src={avatar} alt='user-img' />
                  <span className='userInfo'>
                    <p className='bold-14'>{`${
                      name.slice(0, 1).toUpperCase() + name.slice(1)
                    }`}</p>
                    <p className='regular-14'>@{account}</p>
                  </span>
                </div>
                <div
                  className={`${
                    activeTab !== 'user' ? 'date' : 'gap'
                  } regular-14`}
                >
                  {tweetTime}
                </div>
                {activeTab === 'user' && (
                  <div
                    className='option'
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    <img
                      className='optionIcon'
                      src={optionIcon}
                      alt='option-icon'
                    />
                  </div>
                )}
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
                    <p>{date.substr(0, 10)}</p>
                    <p className='time'>{date.substr(11, 8)}</p>
                  </li>
                  <li>x{quantity}</li>
                  <li className={action === 'buy' ? 'buyPrice' : 'sellPrice'}>
                    ${price}
                  </li>
                </ul>
              </div>
            </div>

            {activeTab === 'all' && (
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
            )}
            {isVisible && activeTab === 'user' && (
              <UnpublishBox
                setVisible={setIsVisible}
                visible={isVisible}
                tweetId={tweetId}
              />
            )}
          </div>
        ) : (
          <div
            className='tweet'
            onClick={(e) => {
              if (
                e.target.className !== 'like' &&
                e.target.className !== 'comment' &&
                e.target.className !== 'option' &&
                e.target.className !== 'optionIcon' &&
                e.target.innerText !== '隱藏公開'
              ) {
                checkItemId(tweetId);
                navigate('/reply');
              } else if (
                e.target.innerText !== '隱藏公開' &&
                isVisible === true
              ) {
                setIsVisible(!isVisible);
              }
            }}
          >
            <div className='tweetMain'>
              <div className='tweetTop'>
                <div className='userWidget'>
                  <img className='userImg' src={avatar} alt='user-img' />
                  <span className='userInfo'>
                    <p className='bold-14'>{`${
                      name.slice(0, 1).toUpperCase() + name.slice(1)
                    }`}</p>
                    <p className='regular-14'>@{account}</p>
                  </span>
                </div>
                <div
                  className={`${
                    activeTab !== 'user' ? 'date' : 'gap'
                  } regular-14`}
                >
                  {tweetTime}
                </div>
                {activeTab === 'user' && (
                  <div
                    className='option'
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    <img
                      className='optionIcon'
                      src={optionIcon}
                      alt='option-icon'
                    />
                  </div>
                )}
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
                    <span className='typeIcon'>
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
                    <p>{date.substr(0, 10).replaceAll('-', '/')}</p>
                    <p className='time'>{date.substr(11, 8)}</p>
                  </li>
                  <li>x{quantity}</li>
                  <li className={action === 'buy' ? 'buyPrice' : 'sellPrice'}>
                    ${price}
                  </li>
                </ul>
              </div>
            </div>

            {activeTab === 'all' && (
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
            )}
            {isVisible && activeTab === 'user' && (
              <UnpublishBox
                setVisible={setIsVisible}
                visible={isVisible}
                tweetId={tweetId}
              />
            )}
          </div>
        )}
        <ReplyModal isActivated={modal} toggle={toggleModal} />
      </>
    );
  }
);

export default Tweet;
