import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';
import logo from '../../assets/logo.svg';

describe('Logo Component', () => {
  test('renders the logo with correct src and alt attributes', () => {
    render(<Logo />);

    const logoImg = screen.getByAltText('Logo');
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('src', logo);
    expect(logoImg).toHaveAttribute('alt', 'Logo');
  });

  test('has correct CSS classes for responsive sizing', () => {
    render(<Logo />);

    const logoImg = screen.getByAltText('Logo');
    expect(logoImg).toHaveClass('max-w-12');
    expect(logoImg).toHaveClass('md:max-w-24');
  });
});
