//style
import './UnpublishBox.scss';
// api
import { unpublishTweet } from '../../api/tweet';

const UnpublishBox = ({ setVisible, visible, tweetId, reSetTweets }) => {
  const handleUnpublish = async () => {
    try {
      await unpublishTweet(tweetId);
      reSetTweets?.((tweets) => {
        return tweets.filter((tweet) => {
          return tweet.id !== tweetId;
        });
      });
    } catch (error) {
      console.log('隱藏交易紀錄失敗:', error);
    }
  };

  return (
    <div className='unpublishBox' onClick={() => setVisible(!visible)}>
      <span className='regular-14' onClick={handleUnpublish}>
        隱藏公開
      </span>
    </div>
  );
};

export default UnpublishBox;
