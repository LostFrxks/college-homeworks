import { useEffect, useState } from 'react'

export function useFetch(request, initialValue) {
  const [data, setData] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    async function loadData() {
      try {
        setLoading(true)
        setError('')

        const result = await request()

        if (isActive) {
          setData(result)
        }
      } catch (err) {
        if (isActive) {
          setError(err.message || 'Something went wrong')
        }
      } finally {
        if (isActive) {
          setLoading(false)
        }
      }
    }

    loadData()

    return () => {
      isActive = false
    }
  }, [request])

  return { data, loading, error }
}
