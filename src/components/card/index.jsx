import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Card = ({ user }) => (
  <div className="card-container" key={user.id}>
    <img
      src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
      alt={user.name}
    />
    <h1>{user.name}</h1>
    <h2>{user.email}</h2>
  </div>
);

Card.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Card;
