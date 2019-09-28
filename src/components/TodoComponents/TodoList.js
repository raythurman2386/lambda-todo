import React from 'react'
import Todo from './Todo'

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
