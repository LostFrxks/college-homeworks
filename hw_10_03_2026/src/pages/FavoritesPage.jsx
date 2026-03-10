import UsersList from '../components/UsersList';
import { useFavorites } from '../contexts/FavoritesContext';

function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <section className="page">
      <h1 className="page__title">Избранные пользователи</h1>

      {favorites.length === 0 ? (
        <p className="page__message">Список избранных пока пуст</p>
      ) : (
        <UsersList users={favorites} />
      )}
    </section>
  );
}

export default FavoritesPage;
