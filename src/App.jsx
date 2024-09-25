import { useEffect, useState } from 'react';

import './App.css';

import { fetchImages } from './services/restapi';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import { useToggle } from './hooks/useToggle';
import ImageModal from './components/ImageModal/ImageModal';


const App = () => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
const [selectedImage, setSelectedImage] = useState("");
  const { isOpen, openModal, closeModal } = useToggle();


  useEffect(() => {
if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(page, query);
      
      setImages((prev) => [...prev, ...data.results]);
      } catch {
      setIsError(true);
      }
      finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);
  
  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  }
  
  const handleSetQuery = topic => {
    setQuery(topic);
    setImages([]);
    setPage(1);
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
    openModal();
  };

  return (
    <div>
      <SearchBar setQuery={handleSetQuery } />
      {images.length > 0 && <ImageGallery images={images} handleImageClick={handleImageClick}/>}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn handleChangePage={handleChangePage} />}
      <ImageModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </div>
  )
}

export default App
