import { useEffect, useState } from 'react';

import './App.css';

import { fetchImages } from './services/restapi';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import toast from 'react-hot-toast';


const App = () => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages();
      
      setImages(data.results);
      } catch {
        
        setIsError(true);
        toast.error('Something went wrong! Please, try again...', {
    duration: 4000,
  });
      }
      finally {
        setIsLoading(false);
      }

      
    };
    getData();
  }, []);
  
  return (
    <div>
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </div>
  )
}

export default App
