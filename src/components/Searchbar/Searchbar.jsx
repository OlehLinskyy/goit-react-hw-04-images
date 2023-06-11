import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';

function SearchBar({ onSubmit }) {
  const [name, setName] = useState('');

  const handleChange = evt => {
    setName(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(name);
  };

  return (
    <header className={css.Searchbar} type="submit">
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <button
          disabled={name.length === 0}
          type="submit"
          className={css.SearchForm_button}
        >
          <span className={css.SearchForm_button_label}>
            <BsSearch size="22px" />
          </span>
        </button>

        <input
          className={css.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={name}
        />
      </form>
    </header>
  );
}
export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
