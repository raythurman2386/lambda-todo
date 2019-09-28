import React from 'react'

const Todo = ({ todo, handleComplete, handleDelete }) => {
  return (
    <>
      <li onClick={() => handleComplete(todo.id)}>{todo.task}</li>
      <button onClick={() => handleDelete(todo.id)}>X</button>
    </>
  )
}

export default Todo
