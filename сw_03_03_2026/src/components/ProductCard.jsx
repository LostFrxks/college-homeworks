import React from 'react'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img
        className="product-card__image"
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__price">${product.price}</p>
      </div>
    </article>
  )
}

export default ProductCard
