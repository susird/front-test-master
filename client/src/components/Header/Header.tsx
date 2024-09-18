import { Logo } from '../Logo/Logo';
import { SearchBar } from '../SearchBar/SearchBar';

export const Header: React.FC = () => {
  return (
    <header className='bg-white flex justify-between items-center w-full p-8'>
      <Logo />
      <SearchBar />
    </header>
  );
};
