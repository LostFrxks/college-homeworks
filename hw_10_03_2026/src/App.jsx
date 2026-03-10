import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
