import { fireEvent, render, screen } from '@testing-library/react';
import { ImageCard } from './ImageCard';

describe('ImageCard Component', () => {
  const mockProps = {
    imageUrl: 'http://example.com/image.jpg',
    title: 'Test Image',
    id: '1',
    author: 'John Doe',
    likesCount: 10,
    liked: false,
    price: 100.0,
    onLike: jest.fn(),
  };

  test('renders ImageCard with correct props', () => {
    render(<ImageCard {...mockProps} />);

    const image = screen.getByAltText(mockProps.title);
    expect(image).toHaveAttribute('src', mockProps.imageUrl);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();

    expect(screen.getByText('100.00')).toBeInTheDocument();

    expect(screen.getByText(/like \(10\)/i)).toBeInTheDocument();
  });

  test('calls onLike when Like button is clicked', () => {
    render(<ImageCard {...mockProps} />);

    const likeButton = screen.getByText(/like \(10\)/i);
    fireEvent.click(likeButton);

    expect(mockProps.onLike).toHaveBeenCalledTimes(1);
  });
});
