import { Logo } from '../Logo/Logo';
import { SearchBar } from '../SearchBar/SearchBar';

export const Header: React.FC = () => {
  return (
    <header className='flex justify-around px-2 py-9  items-center'>
      <Logo />
      <SearchBar />
    </header>
  );
};
