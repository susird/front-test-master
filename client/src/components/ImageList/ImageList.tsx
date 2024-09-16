import { ImageCard } from '../ImageCard/ImageCard';

// type Image = {
//   imageUrl: string;
//   title: string;
// };

export const ImageList: React.FC = () => {
  return (
    <div className='bg-slate-100 w-full'>
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
