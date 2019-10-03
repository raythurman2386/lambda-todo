import React from 'react'
import styled from 'styled-components'

// styles
import './Todo.css'

const Todo = ({ todo, handleComplete }) => {
  return (
    <ItemWrapper
      className={todo.completed ? 'complete' : ''}
      onClick={() => handleComplete(todo.id)}
    >
      {todo.task}
    </ItemWrapper>
  )
}

export default Todo

const ItemWrapper = styled.li`
  border-bottom: .5px solid grey;
  width: 98%;
  text-align: left;
  cursor: pointer;
`