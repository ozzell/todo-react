import { useContext, useState } from 'react'
import { TodoContext } from '../context/todoContext'

const TodoInput = () => {
  const { addTodo } = useContext(TodoContext)
  const [todoItem, setTodoItem] = useState()

  const handleOnInput = event => {
    setTodoItem(event.target.value)
  }

  return (
    <form className="todo-form">
      <label htmlFor="todo-input">Add</label>
      <input onInput={handleOnInput} type="text" id="todo-input" />
      <input onClick={event => addTodo(event, todoItem)} type="submit" value="Add" />
    </form>
  )
}

export default TodoInput