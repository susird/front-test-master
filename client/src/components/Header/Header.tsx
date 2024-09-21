import { Logo } from '../Logo/Logo';

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <header className='flex w-full items-center justify-between gap-2 bg-white p-4 md:p-6'>
      <Logo />
      {children}
    </header>
  );
};
