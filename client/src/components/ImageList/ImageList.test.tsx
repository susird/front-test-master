import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ImageList } from '../../components/ImageList/ImageList';
import { getImages } from '../../services/imageService';

jest.mock('../../services/imageService');

const mockImages = [
  {
    id: 1,
    title: 'Image 1',
    liked: false,
    likes_count: 5,
    author: 'Author 1',
    price: 10,
    main_attachment: { big: 'url1' },
    links: [],
  },
  {
    id: 2,
    title: 'Image 2',
    liked: false,
    likes_count: 3,
    author: 'Author 2',
    price: 20,
    main_attachment: { big: 'url2' },
    links: [],
  },
];

test('renders the list of images', async () => {
  (getImages as jest.Mock).mockResolvedValue(mockImages);
  render(<ImageList />);

  await waitFor(() => {
    expect(screen.getByText(/Image 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Image 2/i)).toBeInTheDocument();
  });
});

test('loads more images on scroll', async () => {
  (getImages as jest.Mock).mockResolvedValueOnce(mockImages);

  render(<ImageList />);

  fireEvent.scroll(window, {
    target: { scrollY: document.documentElement.scrollHeight },
  });

  expect(await screen.findByText(/Image 2/i)).toBeInTheDocument();
});
