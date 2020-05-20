import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const CardList = ({ children }) => (
  <div className="card-list">{ children }</div>
);

CardList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardList;
