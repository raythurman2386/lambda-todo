// your components will all go in this `component` directory.
import React from 'react'

// component
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <ul>
        {todos &&
          todos.map(todo => (
            <Todo key={todo.id} todo={todo} handleComplete={handleComplete} />
          ))}
      </ul>
    </div>
  )
}

export default TodoList
