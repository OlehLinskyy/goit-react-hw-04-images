import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import css from './ImageGallery.module.css';

function ImageGallery({ name }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    if (name.length === 0) {
      return;
    }
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${name}&page=${page}&key=35665373-98cf5b8f6eeff8ca0cc84fee2&image_type=photo&orientation=horizontal&per_page=12`
        );
        if (page === 1) {
          setArticles([...response.data.hits]);
        } else {
          setArticles([...articles, ...response.data.hits]);
        }
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  }, [name, page]);

  useEffect(() => {
    setArticles([]);
    setPage(1);
  }, [name]);

  const clickPage = () => {
    setPage(page => page + 1);
  };

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const largeImage = (image, user) => {
    setLargeImageURL(image);
    setUser(user);
  };

  return (
    <>
      {showModal && (
        <Modal
          onClose={toggleModal}
          articles={articles}
          largeImageURL={largeImageURL}
          user={user}
        />
      )}
      <ul className={css.ImageGallery}>
        <ImageGalleryItem
          largeImage={largeImage}
          articles={articles}
          toggleModal={toggleModal}
        />
      </ul>
      {isLoading && <Loader />}
      {articles.length >= 12 && <Button clickPages={clickPage} />}
    </>
  );
}
export default ImageGallery;

ImageGallery.propTypes = {
  name: PropTypes.string.isRequired,
};
