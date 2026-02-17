import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <img
        className="product-card__image"
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__category">{product.category}</p>

        <div className="product-card__meta">
          <span className="product-card__price">${product.price}</span>
          <span className="product-card__rating">★ {product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
