import React from 'react'

const TodoForm = ({ todo, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='todo'
        value={todo}
        onChange={handleChange}
        placeholder='Add Todo'
      />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default TodoForm
