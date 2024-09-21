import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { SearchBar } from '../SearchBar/SearchBar';

test('renders Header with Logo and SearchBar', () => {
  render(
    <Header>
      <SearchBar setSearchTerm={jest.fn()} />{' '}
    </Header>,
  );
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/You're looking for something?/i),
  ).toBeInTheDocument();
});
