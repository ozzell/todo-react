import {useContext} from 'react'
import {TodoContext} from '../context/todoContext'

const TodoList = () => {
  const {state: {todos}, dispatch} = useContext(TodoContext)

  const markTodoDone = id => {
    dispatch({
      type: 'MARK_DONE',
      payload: id
    })
  }

  return (
    <ol>
      {todos.map(({ id, text, done }) => {
        return (
        <li className={`item ${done ? 'done' : ''}`} key={id}>
          <span>{text}</span>
          {<button onClick={() => markTodoDone(id)}>
            {done ? <span>Undo</span> : <span>Done</span>}
        </button>}
        </li>
        )})}
    </ol>
  )
}

export default TodoList