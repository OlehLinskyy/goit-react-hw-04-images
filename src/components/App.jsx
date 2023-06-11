import React, { useState } from 'react';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import css from './App.module.css';

export const App = () => {
  const [name, setName] = useState('');

  function formSubmitHandler(evt) {
    setName(evt);
  }

  return (
    <div className={css.App}>
      <SearchBar onSubmit={formSubmitHandler} />
      <ImageGallery name={name} />
    </div>
  );
};
