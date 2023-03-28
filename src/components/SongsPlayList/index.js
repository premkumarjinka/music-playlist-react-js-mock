import './index.css'

const SongsPlayList = props => {
  const {details, onDeleteButton} = props
  const {id, imageUrl, name, genre, duration} = details

  const onButton = () => {
    onDeleteButton(id)
  }

  return (
    <li>
      <div className="img-container">
        <div className="img-con">
          <img src={imageUrl} alt="track" />
          <div>
            <p>{name}</p>
            <p>{genre}</p>
          </div>
        </div>

        <div className="duration-container">
          <p>{duration}</p>
          <button data-testid="delete" type="button" onClick={onButton}>
            Close
          </button>
        </div>
      </div>
    </li>
  )
}
export default SongsPlayList
