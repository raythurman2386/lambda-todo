import React from 'react'

// styles
import './Todo.css'

const Todo = ({ todo, handleComplete }) => {
  return (
    <li
      className={todo.completed ? 'complete' : ''}
      onClick={() => handleComplete(todo.id)}
    >
      {todo.task}
    </li>
  )
}

export default Todo
