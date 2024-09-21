import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from '../../components/SearchBar/SearchBar';

describe('SearchBar Component', () => {
  test('renders input with placeholder', () => {
    render(<SearchBar setSearchTerm={jest.fn()} />);

    const inputElement = screen.getByPlaceholderText(
      /You're looking for something?/i,
    );
    expect(inputElement).toBeInTheDocument();
  });

  test('renders the search icon', () => {
    render(<SearchBar setSearchTerm={jest.fn()} />);

    const iconElement = screen.getByTestId('search-icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('input changes value on user input', () => {
    render(<SearchBar setSearchTerm={jest.fn()} />);

    const inputElement = screen.getByPlaceholderText(
      /You're looking for something?/i,
    );

    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(inputElement).toHaveValue('test');
  });
});
