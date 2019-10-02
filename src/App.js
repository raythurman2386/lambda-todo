import React, { Component } from 'react'
import styled from 'styled-components'

// Component
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      todo: '',
    }
  }

  // Get items from localStorage
  componentDidMount() {
    if (localStorage.getItem('todos') !== null) {
      const storedTodos = JSON.parse(localStorage.getItem('todos'))
      this.setState({ todos: storedTodos, todo: '' })
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

    // new todo list upon submitting
    const newTodosList = [...this.state.todos, newTodo]

    // add updated list to LS
    localStorage.setItem('todos', JSON.stringify(newTodosList))

    // Set the state
    this.setState({
      todos: newTodosList,
      todo: '',
    })
  }

  // handleComplete
  handleComplete = id => {
    // loop over todos and check for the proper id that is being completed
    const newTodosComplete = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }

      // If id doesn't match, return that todo
      return todo
    })

    // add the newTodoList to localStorage
    localStorage.setItem('todos', JSON.stringify(newTodosComplete))

    this.setState({
      todos: newTodosComplete,
      todo: '',
    })
  }

  // handleDelete to remove the item
  handleDelete = () => {
    // filter out the completed todos
    const updateDeleted = this.state.todos.filter(todo => !todo.completed)

    // add the new list to local storage after deleting
    localStorage.setItem('todos', JSON.stringify(updateDeleted))

    // set the state to the proper list
    this.setState({
      todos: updateDeleted,
      todo: '',
    })
  }

  render() {
    return (
      <Wrapper>
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
      </Wrapper>
    )
  }
}

export default App

const Wrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  text-align: center;
`
