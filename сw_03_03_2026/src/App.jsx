import React, { useMemo, useState } from 'react'
import { useProducts } from './context/ProductContext'
import ProductCard from './components/ProductCard'

function App() {
  const { products, loading, error } = useProducts()
  const [search, setSearch] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const filteredProducts = useMemo(() => {
    const normalized = search.trim().toLowerCase()
    const max = Number(maxPrice)

    return products.filter(item => {
      const byName = item.title.toLowerCase().includes(normalized)
      const byPrice = !maxPrice || item.price <= max
      return byName && byPrice
    })
  }, [products, search, maxPrice])

  return (
    <main className="catalog">
      <div className="catalog__container">
        <h1 className="catalog__title">Products Catalog</h1>

        <section className="filters">
          <label className="filters__label">
            Search by name
            <input
              className="filters__input"
              type="text"
              placeholder="Phone"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </label>

          <label className="filters__label">
            Max price
            <input
              className="filters__input"
              type="number"
              min="0"
              placeholder="100"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
            />
          </label>
        </section>

        {loading && <p className="catalog__state">Loading...</p>}
        {error && <p className="catalog__state catalog__state_error">{error}</p>}

        {!loading && !error && (
          <section className="catalog__flex">
            {filteredProducts.length === 0 && (
              <p className="catalog__state">Nothing found</p>
            )}

            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        )}
      </div>
    </main>
  )
}

export default App
