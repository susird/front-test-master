import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from '../../components/SearchBar/SearchBar';

describe('SearchBar Component', () => {
  test('renders input with placeholder', () => {
    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText(
      "You're looking for something?",
    );
    expect(inputElement).toBeInTheDocument();
  });

  test('renders the search icon', () => {
    render(<SearchBar />);

    const iconElement = screen.getByTestId('search-icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('input changes value on user input', () => {
    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText(
      "You're looking for something?",
    );

    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(inputElement).toHaveValue('test');
  });
});
