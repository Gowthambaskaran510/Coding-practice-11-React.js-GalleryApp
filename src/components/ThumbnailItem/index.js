// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {thumbnailImg, updatedImg, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailImg

  const onClickImage = () => {
    updatedImg(id)
  }

  const selectedThumb = isActive ? '' : 'hide-image'

  return (
    <li className="list-card">
      <button className="btn" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickImage}
          className={`s-img ${selectedThumb}`}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
