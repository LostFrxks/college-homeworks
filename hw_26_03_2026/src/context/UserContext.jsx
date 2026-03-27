import React, { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const UserContext = createContext(null);

function UserProvider({ children }) {
  const { data: users, loading, error } = useFetch('https://dummyjson.com/users');

  return (
    <UserContext.Provider value={{ users, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
