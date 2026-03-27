import React, { useContext, useState } from 'react';
import UserCard from '../components/UserCard/UserCard';
import { UserContext } from '../context/UserContext';
import useDebounce from '../hooks/useDebounce';
import '../styles/users-page.css';

function UsersPage() {
  const { users, loading, error } = useContext(UserContext);
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const normalizedValue = debouncedSearchValue.trim().toLowerCase();

  const filteredUsers = normalizedValue
    ? users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(normalizedValue);
      })
    : users;

  return (
    <main className="users-page">
      <div className="users-page__container">
        <h1 className="users-page__title">Users List</h1>

        <input
          className="users-page__input"
          type="text"
          placeholder="Search by first name or last name"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />

        {loading && <p className="users-page__status">Loading...</p>}

        {!loading && error && <p className="users-page__status users-page__status--error">{error}</p>}

        {!loading && !error && filteredUsers.length === 0 && (
          <p className="users-page__status">No users found</p>
        )}

        {!loading && !error && filteredUsers.length > 0 && (
          <div className="users-page__list">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default UsersPage;
