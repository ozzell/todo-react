import './App.scss';
import TodoContainer from './containers/TodoContainer'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>
          Todo app
        </h1>
      </header>
      <main>
        <TodoContainer />
      </main>
    </div>
  )
}

export default App
