import React, { useState } from 'react';
import './ImageModal.css';

interface ImageModalProps {
  imageSrc: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageSrc, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <div className={`modal ${isModalOpen ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <div>
            <img src={imageSrc} alt="" />
            <p>Image description goes here</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;