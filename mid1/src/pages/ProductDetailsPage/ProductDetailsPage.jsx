import React from 'react';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetailsPage.css';

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showEggs_mm, setShowEggs_mm] = useState(false);

  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
          throw new Error('Товара нет найден');
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError('Ошибка загрузки товара');
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="product-details">
        <div className="product-details__container">
          <p className="product-details__status">Загрузка товара...</p>
        </div>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="product-details">
        <div className="product-details__container">
          <Link className="product-details__back" to="/">
            ← Назад к каталогу
          </Link>
          <p className="product-details__status product-details__status--error">
            {error || 'Товар не найден'}
          </p>
        </div>
      </main>
    );
  }

  const availability = product.availabilityStatus || (product.stock > 0 ? 'In Stock' : 'Out of Stock');

  return (
    <main className="product-details">
      <div className="product-details__container">
        <Link className="product-details__back" to="/">
          Назад к каталогу
        </Link>

        <article className="product-details__card">
          <div className="product-details__image-wrap">
            <img className="product-details__image" src={product.thumbnail} alt={product.title} />
          </div>

          <div className="product-details__content">
            <h1 className="product-details__title">{product.title}</h1>
            <p className="product-details__description">{product.description}</p>

            <div className="product-details__price-row">
              <span className="product-details__price">${product.price}</span>
              <button type="button" className="product-details__discount" onClick={() => setShowEggs_mm(!showEggs_mm
              )}>
                -{product.discountPercentage}%
              </button>
            </div>

            {showEggs_mm && (
              <img
                className="product-details__egg"
                src="data:image/jpeg;base64,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"
              />
            )}

            <ul className="product-details__list">
              <li className="product-details__item">
                <span>Рейтинг:</span>
                <strong>⚝{product.rating}</strong>
              </li>
              <li className="product-details__item">
                <span>Бренд:</span>
                <strong>{product.brand || '—'}</strong>
              </li>
              <li className="product-details__item">
                <span>Категория:</span>
                <strong>{product.category}</strong>
              </li>
              <li className="product-details__item">
                <span>В наличии:</span>
                <strong>{product.stock} шт.</strong>
              </li>
              <li className="product-details__item">
                <span>Вес:</span>
                <strong>{product.weight || '—'} г</strong>
              </li>

              <li className="product-details__item">
                <span>Доступность:</span>
                <strong className="product-details__availability">{availability}</strong>
              </li>


            </ul>

            
          </div>
        </article>
      </div>
    </main>
  );
}

export default ProductDetailsPage;