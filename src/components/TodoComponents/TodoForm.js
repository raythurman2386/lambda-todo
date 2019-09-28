import React from 'react'

const TodoForm = ({ todo, handleChange, handleSubmit, handleDelete }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name='todo'
          value={todo}
          onChange={handleChange}
          placeholder='Add Todo'
        />
        <button type='submit'>Add Todo</button>
      </form>
      <button onClick={() => handleDelete()}>Clear Todos</button>
    </>
  )
}

export default TodoForm
