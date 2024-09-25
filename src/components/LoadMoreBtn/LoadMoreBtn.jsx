import s from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({handleChangePage}) => {
  return (
    <div>
      <button onClick={handleChangePage} className={s.button}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn
