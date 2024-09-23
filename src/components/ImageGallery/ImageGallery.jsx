import ImageCard from "../ImageCard/ImageCard"


const ImageGallery = ({ images }) => {
  return (
    <ul>
        {images.map(item => <li key={item.id}>
            <ImageCard item={item } />
            
            
        </li>)}
      </ul>
  )
}

export default ImageGallery
