//style
import './DeleteBox.scss';
// context
import { useAuth } from '../../contexts/AuthContext';
// api
import { deleteReply } from '../../api/tweet';

const DeleteBox = ({
  userId,
  replyId,
  setReplies,
  setVisible,
  visible,
  setTweet,
}) => {
  const { currentMember } = useAuth();

  const handleDelete = async () => {
    try {
      if (currentMember.id === userId) {
        await deleteReply(replyId);

        setReplies?.((replies) => {
          return replies.filter((reply) => {
            return reply.id !== replyId;
          });
        });

        setTweet?.((tweet) => {
          return {
            ...tweet,
            replies_count: Number(tweet.replies_count) - 1,
          };
        });
      } else {
        setVisible(!visible);
      }
    } catch (error) {
      console.log('刪除回覆失敗:', error);
    }
  };

  return (
    <div className='deleteBox'>
      <span
        className={`${currentMember.id !== userId && 'gray'} regular-14`}
        onClick={handleDelete}
      >
        刪除回覆
      </span>
    </div>
  );
};

export default DeleteBox;
