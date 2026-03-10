import { useFavorites } from '../contexts/FavoritesContext';

function UserCard({ user }) {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.some((item) => item.id === user.id);

  function handleFavoriteClick() {
    if (isFavorite) {
      removeFromFavorites(user.id);
      return;
    }

    addToFavorites(user);
  }

  return (
    <article className="user-card">
      <img
        className="user-card__image"
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
      />

      <div className="user-card__content">
        <h2 className="user-card__title">
          {user.firstName} {user.lastName}
        </h2>
        <p className="user-card__text">Возраст: {user.age}</p>
        <p className="user-card__text">Email: {user.email}</p>
        <p className="user-card__text">Телефон: {user.phone}</p>
        <p className="user-card__text">Город: {user.address.city}</p>

        <button className="user-card__button" onClick={handleFavoriteClick}>
          {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
        </button>
      </div>
    </article>
  );
}

export default UserCard;
