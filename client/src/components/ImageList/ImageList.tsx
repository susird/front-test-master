import { ImageCard } from '../ImageCard/ImageCard';

import React from 'react';
import { Image } from '../../services/imageService';

type ImageListProps = {
  images: Image[];
  error: string | null;
  loading: boolean;
};

export const ImageList: React.FC<ImageListProps> = ({
  images,
  error,
  loading,
}) => {
  return (
    <div className='flex w-full max-w-screen-2xl flex-col justify-center gap-4 p-8 md:flex-row md:flex-wrap'>
      {images.map((image, index) => {
        return (
          <ImageCard
            key={`${image.id} ${index}`}
            imageUrl={image.main_attachment.big}
            title={image.title.toUpperCase()}
            author={image.author}
            likesCount={image.likes_count}
            liked={image.liked}
            price={image.price}
            id={image.id}
          />
        );
      })}
      {loading && <p>Loading more images...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
