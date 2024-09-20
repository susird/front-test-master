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
    big: string;
  };
  links: { rel: string; uri: string }[];
}

export const ImageList: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      if (loading) return;
      setLoading(true);
      try {
        const data = await getImages('', page);
        setImages((previousImages) => [...previousImages, ...data]);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [page]);

  useEffect(() => {
    const handleScroll = async () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
        setPage((previousPage) => previousPage + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <div className='flex w-full max-w-screen-2xl flex-col justify-center gap-4 p-8 md:flex-row md:flex-wrap'>
      {images.map((image) => {
        return (
          <ImageCard
            imageUrl={image.main_attachment.big}
            title={image.title.toUpperCase()}
            id={image.id.toString()}
            author={image.author}
            likesCount={image.likes_count}
            liked={image.liked}
            price={image.price}
            onLike={() => {}}
          />
        );
      })}
      {loading && <p>Loading more images...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
