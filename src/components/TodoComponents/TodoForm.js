import React from 'react'
import styled from 'styled-components'

const TodoForm = ({ todo, handleChange, handleSubmit, handleDelete }) => {
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <InputWrapper
          name='todo'
          value={todo}
          onChange={handleChange}
          placeholder='Add Todo'
          required
        />
        <ButtonWrapper type='submit'>Add Todo</ButtonWrapper>
      </form>
      <ButtonWrapper onClick={() => handleDelete()}>Clear Todos</ButtonWrapper>
    </FormWrapper>
  )
}

export default TodoForm

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const InputWrapper = styled.input`
  padding: .5rem;
  border: none;
  border-bottom: 1px solid grey;
`

const ButtonWrapper = styled.button`
  padding: .25rem 1rem;
  background: #333;
  color: white;
  border: none;
  margin: 0 5px;
  cursor: pointer;
  :hover {
    background: #300;
  }
`