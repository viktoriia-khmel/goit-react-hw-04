

const ImageCard = ({item}) => {
  return (
    <div>
          <img src={item.urls.small} alt={item.alt_description} />
          <p>Photo made by: {item.user.name }</p>
          </div>
  )
}

export default ImageCard


