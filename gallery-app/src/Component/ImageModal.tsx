import React, { useState } from 'react';
import './ImageModal.css';
import MetadataForm from './MetadataForm';

interface ImageModalProps {
  imageSrc: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageSrc, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [showMetadataForm, setShowMetadataForm] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  const handleShowMetadataForm = () => {
    setShowMetadataForm(true);
  };

  return (
    <div className={`modal ${isModalOpen ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <img src={imageSrc} alt="" />
        {!showMetadataForm && <button onClick={handleShowMetadataForm}>Add Metadata</button>}
        {showMetadataForm && (
          <>
            <h5>Update Metadata</h5>
            <MetadataForm onSubmit={() => console.log('Metadata submitted')} 
              onCancel={() => setShowMetadataForm(false)} />
          </>
        )}
      </div>
    </div>
  );
};

export default ImageModal;