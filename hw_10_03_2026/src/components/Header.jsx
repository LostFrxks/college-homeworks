import { Link, NavLink } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';

function Header() {
  const { favorites } = useFavorites();

  return (
    <header className="header">
      <div className="container header__container">
        <Link className="header__logo" to="/">
          Users Catalog
        </Link>

        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            Пользователи
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            Избранное ({favorites.length})
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
