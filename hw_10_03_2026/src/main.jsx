import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UsersProvider } from './contexts/UsersContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </UsersProvider>
    </BrowserRouter>
  </React.StrictMode>
);
