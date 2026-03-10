import { useMemo, useState } from 'react';
import SearchBar from '../components/SearchBar';
import UsersList from '../components/UsersList';
import { useUsers } from '../contexts/UsersContext';

function HomePage() {
  const { users, loading, error } = useUsers();
  const [maxAge, setMaxAge] = useState('');

  const filteredUsers = useMemo(() => {
    if (!maxAge) {
      return users;
    }

    return users.filter((user) => user.age <= Number(maxAge));
  }, [users, maxAge]);

  return (
    <section className="page">
      <h1 className="page__title">Каталог пользователей</h1>

      <SearchBar maxAge={maxAge} setMaxAge={setMaxAge} />

      {loading && <p className="page__message">Загрузка...</p>}
      {!loading && error && <p className="page__message">{error}</p>}
      {!loading && !error && filteredUsers.length === 0 && (
        <p className="page__message">Пользователи не найдены</p>
      )}
      {!loading && !error && filteredUsers.length > 0 && (
        <UsersList users={filteredUsers} />
      )}
    </section>
  );
}

export default HomePage;
