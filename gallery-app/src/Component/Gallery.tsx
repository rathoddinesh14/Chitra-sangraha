import React, { useState, useEffect } from 'react';
import './Gallery.css';
import ImageCard from './ImageCard';
import { ImageCardProps } from './ImageCardProps';


interface GalleryProps {
  images: ImageCardProps[];
  columns?: number;
  gap?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, columns = 3, gap = '10px' }) => {
  const [displayedImages, setDisplayedImages] = useState<GalleryProps['images']>([]);

  useEffect(() => {
    setDisplayedImages(images);
  }, [images]);

  return (
    <div className="gallery">
      {displayedImages.map((image, index) => (
        <ImageCard key={index} image={image.image} onClick={() => {
            console.log(`Clicked on image: ${image.image.title}`);
        }}/>
      ))}
    </div>
  );
};

export default Gallery;