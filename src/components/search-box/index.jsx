import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SearchBox = ({ placeholder, handleChange }) => (
  <div className="search-wrapper">
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);

SearchBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBox;
