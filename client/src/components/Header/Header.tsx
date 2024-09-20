import { Logo } from '../Logo/Logo';
import { SearchBar } from '../SearchBar/SearchBar';

export const Header: React.FC = () => {
  return (
    <header className='flex w-full items-center justify-between gap-2 bg-white p-4 md:p-6'>
      <Logo />
      <SearchBar />
    </header>
  );
};
