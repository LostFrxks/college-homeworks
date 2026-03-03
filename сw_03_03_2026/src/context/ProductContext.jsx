import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext(null)

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError('')

      const res = await fetch('https://dummyjson.com/products')

      if (!res.ok) {
        throw new Error('Failed to load products')
      }

      const data = await res.json()
      setProducts(data.products || [])
    } catch (e) {
      setError(e.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider
      value={{ products, loading, error, fetchProducts }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => {
  const context = useContext(ProductContext)

  if (!context) {
    throw new Error('useProducts must be used inside ProductProvider')
  }

  return context
}
