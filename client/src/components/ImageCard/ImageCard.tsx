type ImageCardProps = {
  imageUrl: string;
  title: string;
  id: string;
  author: string;
  likesCount: number;
  liked: boolean;
};

export const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  title,
  id,
  author,
  likesCount,
  liked,
}) => {
  return (
    <div className='p-8'>
      <img
        id={id}
        src={imageUrl}
        alt={title}
        className='h-full w-full max-h-80 max-w-sm border border-b-0 border-solid border-slate-200'
      />
      <div className='bg-white flex flex-col items-center p-4 border border-b-0 border-solid border-slate-200'>
        <h1>COLLECTION</h1>
        <p className='text-slate-200'>by underground</p>
      </div>
      <div className='bg-white flex justify-between divide-x divide-slate-200 text-center border border-solid border-slate-200 '>
        <button className='flex-1'>{liked ? 'Unlike' : 'Like'}</button>
        <p className='flex-1 '>{likesCount}</p>
      </div>
    </div>
  );
};
