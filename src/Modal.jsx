import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    width: '300px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
};

export default Modal;