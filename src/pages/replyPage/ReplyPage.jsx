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
import { getReplies } from '../../api/reply';
//context
import { useId } from '../../contexts/IdContext';
//icons
import arrowLeft from '../../assets/arrow-left.svg';
// style
import './ReplyPage.scss';

const ReplyPage = () => {
  const [tweetReplies, setTweetReplies] = useState([]);
  const { currentId } = useId();
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const getTweetReplies = async () => {
      try {
        const replies = await getReplies(currentId);
        setTweetReplies(replies);
      } catch (error) {
        console.error(error);
      }
    };
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
          <SingleTweet />
          <SingleReply />
          {tweetReplies.map((reply) => {
            return <SingleReply />;
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
