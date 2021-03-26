const baseUrl = 'http://localhost:3001/api/v1/todos'

export const getTodos = async () => {
  const response = await fetch(baseUrl)
  return response.json()
}
