import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addToFavorites(user) {
    setFavorites((prev) => {
      const alreadyExists = prev.some((item) => item.id === user.id);

      if (alreadyExists) {
        return prev;
      }

      return [...prev, user];
    });
  }

  function removeFromFavorites(userId) {
    setFavorites((prev) => prev.filter((item) => item.id !== userId));
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
