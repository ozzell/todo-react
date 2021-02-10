import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import TodoProvider from '../context/todoContext'

const TodoContainer = () => {
  return (
    <TodoProvider>
      <TodoInput />
      <TodoList />
    </TodoProvider>
  )
}

export default TodoContainer