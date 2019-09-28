// your components will all go in this `component` directory.
import React from 'react'

// component
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = ({ todos, todo, handleChange, handleSubmit }) => {
  return (
    <div>
      <h3>Todo List Component</h3>
      <TodoForm
        todo={todo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {todos && todos.map(todo => <Todo key={todo.id} todo={todo} />)}
    </div>
  )
}

export default TodoList
