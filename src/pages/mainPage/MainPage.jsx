import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// components
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import RankingList from '../../components/rankingList/RankingList';
import Tweet from '../../components/tweet/Tweet';
// api
import { getTweets } from '../../api/main';
// css
import './MainPage.scss';
import { formatTime } from '../../timeSwitcher/timeSwitcher';

export const MainPage = () => {
  const [tweets, setTweets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const tweets = await getTweets();
        setTweets(tweets);
        console.log(tweets);
      } catch (error) {
        console.log(error);
      }
    };

    getTweetsAsync();
  }, []);

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate('/login');
  //   }
  // }, [navigate, isAuthenticated]);

  return (
    <>
      <div className='homePage'>
        <Navbar />
        <div className='homeBody'>
          <Header />
          <div className='homeMain'>
            <div className='tweetsAndRanking'>
              <div className='tweets'>
                {tweets?.map((tweet, i) => {
                  return (
                    i <= 10 && (
                      <Tweet
                        key={tweet.id}
                        tweetId={tweet.id}
                        name={tweet.transaction_user_name}
                        account={tweet.transaction_user_account}
                        tweetTime={formatTime(tweet.updated_on)}
                        content={tweet.description}
                        action={tweet.action}
                        date={tweet.transaction_date}
                        quantity={tweet.quantity}
                        price={tweet.price}
                        likes={tweet.like_count}
                        isLiked={tweet.is_liked}
                        replies={tweet.replies_count}
                        reSetTweets={setTweets}
                      />
                    )
                  );
                })}
              </div>
              <RankingList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
