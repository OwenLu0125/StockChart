import { useState } from 'react';
import msgIcon from '../../../assets/message.svg';
import './DailyItemModal.scss';

export const DailyItemModal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <img src={msgIcon} alt='message-icon' onClick={toggleModal} />

      {modal && (
        <div className='modal'>
          <div className='overlay'></div>
          <div className='modal-content'>
            <h2>
              <img src={msgIcon} alt='' />
              備註
            </h2>
            <div className='textSection'>
              <textarea
                className='modalInput'
                type='text'
                placeholder='為您儲存的交易做些筆記吧？'
              />
            </div>
            <div className='btnSection'>
              <button
                className='secondary-button bold-16'
                onClick={toggleModal}
              >
                取消
              </button>
              <button className='primary-button bold-16'>確定</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DailyItemModal;
