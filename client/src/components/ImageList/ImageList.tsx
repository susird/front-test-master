import { ImageCard } from '../ImageCard/ImageCard';
import { getImages } from '../../services/imageService';
import React, { useEffect, useState } from 'react';

interface Image {
  id: number;
  title: string;
  liked: boolean;
  price: number;
  likes_count: number;
  author: string;
  main_attachment: {
    small: string;
  };
}

export const ImageList: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getImages('', 1);
        setImages((previousImages) => [...previousImages, ...data]);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };
    fetchImages();
  }, []);

  return (
    <div className='flex w-full max-w-screen-2xl flex-col justify-center gap-4 p-8 md:flex-row md:flex-wrap'>
      {images.map((image) => {
        return (
          <ImageCard
            imageUrl={image.main_attachment.small}
            title={image.title.toUpperCase()}
            id={image.id.toString()}
            author={image.author}
            likesCount={image.likes_count}
            liked={image.liked}
            price={image.price}
          />
        );
      })}
      {error && <p>{error}</p>}
    </div>
  );
};
