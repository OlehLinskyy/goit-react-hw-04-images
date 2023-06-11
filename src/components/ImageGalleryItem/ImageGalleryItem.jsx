import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ articles, toggleModal, largeImage }) {
  return articles.map(({ id, webformatURL, largeImageURL, user }) => {
    return (
      <li
        onClick={() => {
          toggleModal();
          largeImage(largeImageURL, user);
        }}
        className={css.ImageGalleryItem}
        key={id}
      >
        <img
          className={css.ImageGalleryItem_image}
          src={webformatURL}
          alt={user}
        />
      </li>
    );
  });
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    })
  ),
  toggleModal: PropTypes.func.isRequired,
  largeImage: PropTypes.func.isRequired,
};
