import { createContext, useState } from 'react'

export const TodoContext = createContext()

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {id: 0, text: 'Go to the gym', done: false},
    {id: 1, text: 'Eat some food', done: false}
  ])

  const addTodo = (event, text) => {
    event.preventDefault()
    if (text.length === 0) {
      return
    }
    const id = todos.length
    setTodos([...todos, {id, text, done: false}])
  }

  const markTodoDone = id => {
    const oldItem = todos.find(item => item.id === id)
    const updatedItem = {id, text: oldItem.text, done: !oldItem.done}
    const newTodo = [...todos.filter(item => item.id !== id), updatedItem]
    setTodos(newTodo.sort((a, b) => a.id - b.id))
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, markTodoDone }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider