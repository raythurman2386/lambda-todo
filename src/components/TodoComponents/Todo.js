import React from 'react'

const Todo = ({ todo, handleComplete }) => {
  return <li onClick={() => handleComplete(todo.id)}>{todo.task}</li>
}

export default Todo
