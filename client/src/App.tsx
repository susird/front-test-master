import './App.css';
import { Header } from './components/Header/Header';
import { ImageList } from './components/ImageList/ImageList';

function App() {
  return (
    <div className='flex h-screen flex-col bg-slate-100'>
      <>
        <Header />
        <main className='flex w-full justify-center bg-slate-100'>
          <ImageList />
        </main>
      </>
    </div>
  );
}

export default App;
