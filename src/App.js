import React from 'react'

// Component
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
    console.log('clicked submit')
  }

  // handleDelete to remove the item

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          todo={this.state.todo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default App
