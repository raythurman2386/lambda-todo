// your components will all go in this `component` directory.
import React from 'react'

// component
import Todo from './Todo'

const TodoList = ({ todos }) => {
  return (
    <div>
      <h3>Todo List Component</h3>
      {todos && todos.map(todo => <Todo todo={todo} />)}
    </div>
  )
}

export default TodoList
