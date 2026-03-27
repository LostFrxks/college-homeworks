import React from 'react';
import './UserCard.css';

function UserCard({ user }) {
  return (
    <article className="user-card">
      <img className="user-card__image" src={user.image} alt={user.firstName} />

      <div className="user-card__content">
        <h2 className="user-card__title">
          {user.firstName} {user.lastName}
        </h2>

        <p className="user-card__text">Age: {user.age}</p>
        <p className="user-card__text">Email: {user.email}</p>
        <p className="user-card__text">Phone: {user.phone}</p>
        <p className="user-card__text">City: {user.address.city}</p>
      </div>
    </article>
  );
}

export default UserCard;
