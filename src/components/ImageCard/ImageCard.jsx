import s from './ImageCard.module.css'

const ImageCard = ({item, handleImageClick}) => {
  return (
    <div>
      <img src={item.urls.small} alt={item.alt_description} onClick={() => handleImageClick(item.urls.regular)} className={s.image } />
          <p className={s.title}>Photo made by: {item.user.name }</p>
    </div>
  )
}

export default ImageCard


