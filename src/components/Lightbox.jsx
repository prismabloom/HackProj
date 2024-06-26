import React from 'react';
import '../style/lightbox.css';
import GoEcopictalk from "../asset/GoEcopictalk.png"

function Lightbox({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
       <img src={GoEcopictalk} alt="Lightbox Top" className="lightbox-image" />
        {children}
        <button className="lightbox-close" onClick={onClose}>Start</button>
      </div>
    </div>
  );
}

export default Lightbox;
