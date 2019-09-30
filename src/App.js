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
    if (localStorage.getItem('todos') === undefined) {
      this.setState({ todos: [], todo: '' })
    }
    return localStorage.setItem('todos', JSON.stringify(...this.state.todos))
  }

  // handleChange for the input
  handleChange = e => {
    this.setState({ todo: e.target.value })
  }

  // handleSubmit for the form
  handleSubmit = e => {
    e.preventDefault()
    let newTodo = { task: this.state.todo, id: Date.now(), completed: false }
    this.setState(
      {
        todos: [...this.state.todos, newTodo],
        todo: '',
      },
      () => localStorage.setItem('todos', JSON.stringify(...this.state.todos)),
    )
  }

  // handleComplete
  handleComplete = id => {
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
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed),
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
  margin: 0 auto;
  text-align: center;
`