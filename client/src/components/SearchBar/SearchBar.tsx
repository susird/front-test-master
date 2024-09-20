import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface SearchBarProps {
  onSearchChange: (value: string) => void;
}
export const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  return (
    <div className='relative w-full max-w-52 rounded-2xl bg-slate-200 py-2 md:max-w-60'>
      <MagnifyingGlassIcon className='absolute left-3 top-2 h-4 w-4 md:top-2.5' />
      <input
        type='text'
        placeholder="You're looking for something?"
        className='flex w-full bg-transparent pl-8 text-xs md:text-sm'
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};
