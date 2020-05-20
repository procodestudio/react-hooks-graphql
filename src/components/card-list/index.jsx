import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
import './styles.css';

const CardList = ({ users }) => (
  <div className="card-list">
    { users && users.map((user) => <Card user={user} />)}
  </div>
);

CardList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};

export default CardList;
