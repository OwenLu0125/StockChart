//hooks
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// components
import Navbar from '../../components/navbar/Navbar';
import RankingList from '../../components/rankingList/RankingList';
import SingleTweet from '../../components/singleTweet/SingleTweet';
import SingleReply from '../../components/singleReply/SingleReply';
// context
import { useAuth } from '../../contexts/AuthContext';
// api
import { getReplies } from '../../api/tweet';
import { getSingleTweet } from '../../api/tweet';
//context
import { useId } from '../../contexts/IdContext';
//icons
import arrowLeft from '../../assets/arrow-left.svg';
// style
import './ReplyPage.scss';

const ReplyPage = () => {
  const [singleTweet, setSingleTweet] = useState({});
  const [tweetReplies, setTweetReplies] = useState([]);
  const { currentId } = useId();
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const getSingleTweetAsync = async () => {
      try {
        const tweet = await getSingleTweet(currentId);
        console.log(tweet);
        setSingleTweet(tweet);
      } catch (error) {
        console.log(error);
      }
    };

    const getTweetReplies = async () => {
      try {
        const replies = await getReplies(currentId);
        setTweetReplies(replies);
        console.log(replies);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleTweetAsync();
    getTweetReplies();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className='replyPage'>
      <Navbar />
      <div className='signleBody'>
        <div className='replyMain'>
          <div className='singleHeader'>
            <span>
              <img src={arrowLeft} alt='arrow-left' />
              <p className='bold-18'>推文</p>
            </span>
          </div>
          <SingleTweet tweet={singleTweet} setTweet={setSingleTweet} />
          {tweetReplies?.map((reply) => {
            return (
              <SingleReply
                key={reply.id}
                name={reply.user_name}
                account={reply.user_account}
                replyTo={singleTweet.transaction_user_account}
                date={reply.updated_on}
                content={reply.content}
              />
            );
          })}
        </div>
        <div className='ranking'>
          <RankingList />
        </div>
      </div>
    </div>
  );
};

export default ReplyPage;
