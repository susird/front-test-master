import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import { PriceTag } from '../PriceTag/PriceTag';

type ImageCardProps = {
  imageUrl: string;
  title: string;
  id: string;
  author: string;
  likesCount: number;
  liked: boolean;
  price: number;
};

export const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  title,
  id,
  author,
  likesCount,
  liked,
  price,
}) => {
  return (
    <div className='relative flex max-h-[520px] flex-col overflow-hidden border border-b-0 border-solid border-slate-200 bg-white'>
      <PriceTag price={price} />
      <img
        id={id}
        src={imageUrl}
        alt={title}
        className='h-full max-h-80 w-full object-cover'
      />
      <div className='flex flex-col divide-y border border-solid border-slate-200'>
        <div className='flex h-full max-h-24 w-full flex-col items-center p-4'>
          <h1>COLLECTION</h1>
          <p className='md:text-lg'>
            <span className='text-slate-400'>by </span>
            underground
          </p>
        </div>
        <div className='flex h-full max-h-16 w-full justify-between divide-x divide-slate-200 text-center'>
          <button className='flex flex-1 flex-row items-center justify-center gap-2 p-2'>
            <span className='text-slate-400'>0</span>
            <div className='rounded-full bg-green-300 p-1'>
              <HandThumbUpIcon className='h-4 w-4 text-white' />
            </div>
          </button>
          <button className='flex flex-1 flex-row items-center justify-center gap-2 p-2'>
            <div className='rounded-full bg-slate-300 p-1'>
              <ArrowPathIcon className='h-4 w-4 text-white' />
            </div>
            <span className='text-slate-400'>0</span>
          </button>
        </div>
      </div>
    </div>
  );
};
