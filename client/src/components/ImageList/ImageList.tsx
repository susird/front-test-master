import { ImageCard } from '../ImageCard/ImageCard';

// type Image = {
//   imageUrl: string;
//   title: string;
// };

export const ImageList: React.FC = () => {
  return (
    <div className='flex w-full max-w-screen-2xl flex-col justify-center gap-4 p-8 md:flex-row md:flex-wrap'>
      <ImageCard
        imageUrl={'https://picsum.photos/id/100/300'}
        title={''}
        id={''}
        author={''}
        likesCount={0}
        liked={false}
      />
      <ImageCard
        imageUrl={'https://picsum.photos/id/100/300'}
        title={''}
        id={''}
        author={''}
        likesCount={0}
        liked={false}
      />
      <ImageCard
        imageUrl={'https://picsum.photos/id/100/300'}
        title={''}
        id={''}
        author={''}
        likesCount={0}
        liked={false}
      />
      <ImageCard
        imageUrl={'https://picsum.photos/id/100/300'}
        title={''}
        id={''}
        author={''}
        likesCount={0}
        liked={false}
      />
      <ImageCard
        imageUrl={'https://picsum.photos/id/100/300'}
        title={''}
        id={''}
        author={''}
        likesCount={0}
        liked={false}
      />
    </div>
  );
};
