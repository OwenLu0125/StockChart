// icons
import userImg from '../../assets/user.jpg';
import closeIcon from '../../assets/close.svg';

// style
import './ReplyModal.scss';

const ReplyModal = ({ isActivated, toggle }) => {
  return (
    <>
      {isActivated && (
        <div className='Replymodal'>
          <div className='overlay'></div>
          <div className='modal-content'>
            <div className='userWidget'>
              <img className='userImg' src={userImg} alt='user-img' />
              <span className='userInfo'>
                <p className='bold-14'>Tylor</p>
                <span className='verticalLine'></span>
                <p className='regular-14'>@tylor</p>
              </span>
              <img className='closeImg' src={closeIcon} alt='close-icon' />
            </div>
            <div className='textBox'>
              <textarea
                className='modalInput bold-14'
                type='text'
                placeholder='寫下您的留言'
              />
              <button className='btn primary-button bold-16'>回覆</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReplyModal;
