// hooks
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
//api
import { postReply } from '../../api/tweet';
//context
import { useAuth } from '../../contexts/AuthContext';
import { useId } from '../../contexts/IdContext';
// icons
import closeIcon from '../../assets/close.svg';
// style
import './ReplyModal.scss';
const ReplyModal = ({ isActivated, toggle, setTweet }) => {
  const [replyMsg, setReplyMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [res, setRes] = useState('');
  const { currentMember } = useAuth();
  const { currentId } = useId();

  const handleCloseModal = () => {
    setReplyMsg('');
    toggle();
  };

  // useMutation - start //
  const queryClient = useQueryClient();
  const PostMutation = useMutation({
    mutationFn: async (reply) => {
      return await postReply(reply);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries('/posts');
      queryClient.invalidateQueries('/replies');
      setRes(data);
      console.log(data);
    },
  });
  // useMutation - end //

  const handleReply = async () => {
    if (replyMsg.length === 0) {
      setErrorMsg('請輸入內容');
      return;
    }

    try {
      // const res = await postReply({ id: currentId, content: replyMsg });

      // console.log(res);
      PostMutation.mutate({ id: currentId, content: replyMsg });

      setTweet?.((tweet) => {
        return {
          ...tweet,
          replies_count: Number(tweet.replies_count) + 1,
        };
      });

      // setReplies?.((replies) => {
      //   return [
      //     {
      //       ...res,
      //       user_name: currentMember?.name,
      //       user_account: currentMember?.account,
      //     },
      //     ...replies,
      //   ];
      // });

      // reSetTweets?.((prev) => {
      //   return prev.map((tweet) => {
      //     if (tweet.id === currentId) {
      //       return {
      //         ...tweet,
      //         replies_count: Number(tweet.replies_count) + 1,
      //       };
      //     }
      //     return { ...tweet };
      //   });
      // });

      setReplyMsg('');
      setErrorMsg('');
      handleCloseModal();
    } catch (error) {
      console.error('回覆留言失敗:', error);
    }
  };

  return (
    <>
      {isActivated && (
        <div className='replyModal'>
          <div className='modal-overlay'></div>
          <div className='modal-container'>
            <div className='userWidget'>
              <img
                className='userImg'
                src={currentMember?.avatar}
                alt='user-img'
              />
              <span className='userInfo'>
                <p className='bold-14'>{`${
                  currentMember?.name.slice(0, 1).toUpperCase() +
                  currentMember?.name.slice(1)
                }`}</p>
                <span className='verticalLine'></span>
                <p className='regular-14'>@{currentMember?.account}</p>
              </span>
              <img
                className='closeImg'
                src={closeIcon}
                alt='close-icon'
                onClick={handleCloseModal}
              />
            </div>
            <div className='textBox'>
              <textarea
                className='modalInput medium-16'
                value={replyMsg}
                placeholder='輸入您的回覆...'
                onChange={(e) => setReplyMsg(e.target.value)}
              />
              <button
                className='btn primary-button bold-16'
                onClick={handleReply}
              >
                回覆
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReplyModal;
