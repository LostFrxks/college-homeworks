import { createContext, useContext, useEffect, useState } from 'react';

const UsersContext = createContext(null);

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      setLoading(true);
      setError('');

      const url = search.trim()
        ? `https://dummyjson.com/users/search?q=${encodeURIComponent(search)}`
        : 'https://dummyjson.com/users';

      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error('Ошибка загрузки пользователей');
        }

        const data = await response.json();
        setUsers(data.users || []);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Не удалось загрузить пользователей');
          setUsers([]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <UsersContext.Provider
      value={{
        users,
        search,
        setSearch,
        loading,
        error,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
