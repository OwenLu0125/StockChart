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
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Modal</h2>
            <p>
              Lorem ipsum dolor 
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default DailyItemModal;
