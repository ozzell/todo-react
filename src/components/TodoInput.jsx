import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createTodo} from '../reducers/todoReducer'

const TodoInput = () => {
  const dispatch = useDispatch()
  const [todoItem, setTodoItem] = useState()

  const handleOnInput = event => {
    setTodoItem(event.target.value)
  }

  const addTodo = event => {
    event.preventDefault()
    dispatch(createTodo(todoItem))
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