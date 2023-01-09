import React from "react";
import './Modal.css';

function Modal ({ isVisible = false, title, text, email, phone, onClose, create }) {
    const keydownHandler = ({ key }) => {
        switch (key) {
          case 'Escape':
            onClose();
            break;
          default:
        }
      };
    
      React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
      });
    
    
    return !isVisible ? null : (
      <div className="modal" onClick={onClose}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            {title}
            <span className="modal-close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            {text}
            {email}
            {phone}
            {create}
          </div>
        </div>
      </div>
    );
  };

export default Modal;