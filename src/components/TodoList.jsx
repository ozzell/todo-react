import { useContext } from 'react'
import { TodoContext } from '../context/todoContext'

const TodoList = () => {
  const { todos, markTodoDone } = useContext(TodoContext)
  return (
    <ol>
      {todos.map(({ id, text, done }) => {
        return (
        <li className={`item ${done ? 'done' : ''}`} key={id}>
          <span>{text}</span> <button onClick={() => markTodoDone(id)}>{done ? <span>Undo</span> : <span>Done</span>}</button>
        </li>
      )})}
    </ol>
  )
}

export default TodoList