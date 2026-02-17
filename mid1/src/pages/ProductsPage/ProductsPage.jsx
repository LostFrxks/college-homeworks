import React, { useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import './ProductsPage.css';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      setError('');

      try {
        const url = query.trim()
          ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query.trim())}`: 'https://dummyjson.com/products';
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Не удалось получить товары');
        }

        const data = await response.json();
        setProducts(data.products || []);
      } catch (err) {
        setError('Ошибка загрузки товаров');
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [query]);

  return (
    <main className="products-page">
      <div className="products-page__container">
        <h1 className="products-page__title"></h1>
Каталог товаров
        <div className="products-page__search-wrap">
          <input
            className="products-page__search"
            type="text"
            placeholder="Поиск товаров..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="products-page__icon">🔍</span>
        </div>

        {loading && <p className="products-page__status">Загрузка...</p>}
        {error && <p className="products-page__status products-page__status--error">{error}</p>}

        {!loading && !error && products.length === 0 && (
          <p className="products-page__status">Товары не найдены</p>
        )}

        {!loading && !error && products.length > 0 && <ProductList products={products} />}
      </div>
    </main>
  );
}

export default ProductsPage;