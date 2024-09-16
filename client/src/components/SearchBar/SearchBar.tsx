import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
export const SearchBar: React.FC = () => {
  return (
    <div
      className='
      max-w-80
      bg-slate-200	
      rounded-2xl 
      max-h-7
      flex 
     
      justify-center
      '
    >
      <MagnifyingGlassIcon className='w-4 h-4' />
      <input
        type='text'
        placeholder="You're looking for something?"
        className='
        flex
        bg-transparent
        '
      />
    </div>
  );
};
