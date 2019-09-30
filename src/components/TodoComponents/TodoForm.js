import React from 'react'
import styled from 'styled-components'

const TodoForm = ({ todo, handleChange, handleSubmit, handleDelete }) => {
  return (
    <FormWrapper>
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
    </FormWrapper>
  )
}

export default TodoForm

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`