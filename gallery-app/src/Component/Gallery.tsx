import React, { useState, useEffect } from 'react';
import './Gallery.css';
import ImageCard from './ImageCard';
import ImageModal from './ImageModal';
import { ImageCardProps } from './ImageCardProps';
import SearchBar from './SearchBar';

interface GalleryProps {
  images: ImageCardProps[];
  columns?: number;
  gap?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, columns = 3, gap = '10px' }) => {
  const [displayedImages, setDisplayedImages] = useState<GalleryProps['images']>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enlargedImageSrc, setEnlargedImageSrc] = useState('');

  useEffect(() => {
    setDisplayedImages(images);
  }, [images]);

  const handleImageClick = (imageSrc: string) => {
    setEnlargedImageSrc(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOnSearch = (searchTerm: string) => {
    const filteredImages = images.filter((image) =>
      image.image.alt.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedImages(filteredImages);
  };

  return (
    <div>
      <SearchBar onSearch={handleOnSearch}/>
      <div className='gallery'>
        {displayedImages.map((image, index) => (
          <ImageCard key={index} image={image.image} onClick={() => handleImageClick(image.image.src)} />
        ))}
        {isModalOpen && (
          <ImageModal imageSrc={enlargedImageSrc} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default Gallery;