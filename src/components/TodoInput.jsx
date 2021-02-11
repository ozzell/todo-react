import {useContext, useState} from 'react'
import {TodoContext} from '../context/todoContext'

const TodoInput = () => {
  const {dispatch} = useContext(TodoContext)
  const [todoItem, setTodoItem] = useState()

  const handleOnInput = event => {
    setTodoItem(event.target.value)
  }

  const addTodo = event => {
    event.preventDefault()
    dispatch({
      type: 'ADD_TODO',
      payload: todoItem
    })
  }

  return (
    <form className="todo-form">
      <label htmlFor="todo-input">Add</label>
      <input onInput={handleOnInput} type="text" id="todo-input" />
      <input onClick={addTodo} type="submit" value="Add" />
    </form>
  )
}

export default TodoInput