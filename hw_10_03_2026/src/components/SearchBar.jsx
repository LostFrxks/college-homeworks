import { useUsers } from '../contexts/UsersContext';

function SearchBar({ maxAge, setMaxAge }) {
  const { search, setSearch } = useUsers();

  return (
    <div className="filters">
      <div className="filters__group">
        <label className="filters__label" htmlFor="search">
          Поиск
        </label>
        <input
          id="search"
          className="filters__input"
          type="text"
          placeholder="Введите имя"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="filters__group">
        <label className="filters__label" htmlFor="age">
          Максимальный возраст
        </label>
        <input
          id="age"
          className="filters__input"
          type="number"
          min="0"
          placeholder="Например 30"
          value={maxAge}
          onChange={(event) => setMaxAge(event.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
