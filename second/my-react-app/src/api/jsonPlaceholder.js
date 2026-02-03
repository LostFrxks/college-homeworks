const BASE_URL = 'https://jsonplaceholder.typicode.com'

const handleResponse = async (response) => {
  if (!response.ok) {
    const message = `Request failed: ${response.status}`
    throw new Error(message)
  }
  return response.json()
}

export const getPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`)
  return handleResponse(response)
}

export const getPostById = async (id) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`)
  return handleResponse(response)
}

export const getCommentsByPostId = async (id) => {
  const response = await fetch(`${BASE_URL}/posts/${id}/comments`)
  return handleResponse(response)
}
