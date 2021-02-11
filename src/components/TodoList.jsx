import {useSelector, useDispatch} from 'react-redux'
import {markDone} from '../reducers/todoReducer'

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  const markTodoDone = id => {
    dispatch(markDone(id))
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