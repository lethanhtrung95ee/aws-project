// Inside DialogModal.js
import React from 'react';

const DialogModal = ({ onClose }) => {
  console.log('DialogModal rendered'); // Add this line
  return (
    <div
      className="modal"
      style={{
        display: 'contents',
        // position: 'fixed',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        // backgroundColor: 'white',
        // padding: '20px',
        // zIndex: 1000,
        color: 'black',
      }}
    >
      <div className="modal-content">
        <p>Contact information sent successfully!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
export default DialogModal;
