import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {markDone, initTodos} from '../reducers/todoReducer'
import {getTodos} from '../services/todos'

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  const markTodoDone = id => {
    dispatch(markDone(id))
  }

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos()
      dispatch(initTodos(todos))
    }
    fetchTodos()
  }, [dispatch])

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