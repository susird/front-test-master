import { useEffect, useState } from 'react';
import './App.css';
import { getImages, Image } from '../src/services/imageService';
import { Header } from './components/Header/Header';
import { ImageList } from './components/ImageList/ImageList';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filteredImages, setFilteredImages] = useState<Image[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const handleScroll = async () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
        setPage((previousPage) => previousPage + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, setPage]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredImages(images);
      return;
    }
    const filteredImages = images.filter((image) => {
      return (
        image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredImages(filteredImages);
  }, [searchTerm, images]);

  useEffect(() => {
    const fetchImages = async () => {
      if (loading) return;
      setLoading(true);
      try {
        const data = await getImages(page);
        setImages((previousImages) => [...previousImages, ...data]);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className='flex h-screen flex-col bg-slate-100'>
      <>
        <Header>
          <SearchBar setSearchTerm={setSearchTerm} />
        </Header>
        <main className='flex w-full justify-center bg-slate-100'>
          <ImageList images={filteredImages} error={error} loading={loading} />
        </main>
      </>
    </div>
  );
}

export default App;
