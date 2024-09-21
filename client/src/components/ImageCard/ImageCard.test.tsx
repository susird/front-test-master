import { fireEvent, render, screen } from '@testing-library/react';
import { ImageCard } from '../../components/ImageCard/ImageCard';

describe('ImageCard Component', () => {
  const mockProps = {
    imageUrl: 'http://example.com/image.jpg',
    title: 'Test Image',
    author: 'John Doe',
    likesCount: 10,
    price: 100.0,
  };

  test('renders ImageCard with correct props', () => {
    render(<ImageCard id={0} {...mockProps} />);

    const image = screen.getByAltText(mockProps.title);
    expect(image).toHaveAttribute('src', mockProps.imageUrl);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();

    expect(screen.getByText('100.00')).toBeInTheDocument();

    expect(screen.getByText(10)).toBeInTheDocument();
  });

  test('calls onLike when Like button is clicked', () => {
    render(<ImageCard id={0} {...mockProps} />);

    const likeButton = screen.getByRole('button', { name: /10/i });
    fireEvent.click(likeButton);

    expect(likeButton).toHaveTextContent('11');
  });
});
