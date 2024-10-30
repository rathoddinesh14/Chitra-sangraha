import React from 'react';
import './ImageCard.css';
import { ImageCardProps } from './ImageCardProps';

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className="image-card" onClick={onClick}>
      <img src={image.src} alt={image.alt} />
      <div className="image-details">
        <h4>{image.title}</h4>
        <p>{image.description}</p>
      </div>
    </div>
  );
};

export default ImageCard;