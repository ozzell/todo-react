import {createContext, useReducer} from 'react'

export const TodoContext = createContext()

const initialState = {
  todos: [
    {id: 0, text: 'Go to the gym', done: false},
    {id: 1, text: 'Eat some food', done: false}
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      if (!action.payload) {
        return {todos: state.todos}
      }
      return {
        todos: [...state.todos, {id: state.todos.length, text: action.payload, done: false}]
      }
    case 'MARK_DONE':
      const oldItem = state.todos.find(item => item.id === action.payload)
      const updatedItem = {id: action.payload, text: oldItem.text, done: !oldItem.done}
      const newTodo = [...state.todos.filter(item => item.id !== action.payload), updatedItem]
      return {
        todos: newTodo.sort((a, b) => a.id - b.id)
      }
    default:
      throw new Error()
  }
}

const TodoProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TodoContext.Provider value={{state, dispatch}}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider