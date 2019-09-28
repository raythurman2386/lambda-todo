import React from 'react'

// Component
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super()
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
        },
      ],
      todo: '',
    }
  }

  // handleChange for the input
  handleChange = e => {
    this.setState({ todo: e.target.value })
  }

  // handleSubmit for the form
  handleSubmit = e => {
    e.preventDefault()
    let newTodo = { task: this.state.todo, id: Date.now(), completed: false }
    // console.log(newTodo)
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: '',
    })
  }

  // handleComplete
  handleComplete = id => {
    // console.log('completed')
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }),
    })
  }

  // handleDelete to remove the item
  handleDelete = () => {
    // console.log('deleted!')
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed),
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          todo={this.state.todo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
        />
        <TodoList
          todos={this.state.todos}
          handleComplete={this.handleComplete}
        />
      </div>
    )
  }
}

export default App
