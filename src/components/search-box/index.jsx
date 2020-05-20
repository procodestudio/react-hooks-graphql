import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SearchBox = ({ searchString, placeholder, handleChange }) => (
  <div className="search-wrapper">
    <input
      className="search"
      type="search"
      value={searchString}
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);

SearchBox.propTypes = {
  searchString: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

SearchBox.defaultProps = {
  searchString: '',
};

export default SearchBox;
