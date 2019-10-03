import React from 'react'
import styled from 'styled-components'
import Todo from './Todo'

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <ListWrapper>
        {todos &&
          todos.map(todo => (
            <Todo key={todo.id} todo={todo} handleComplete={handleComplete} />
          ))}
      </ListWrapper>
    </div>
  )
}

export default TodoList

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  list-style-type: none;
  line-height: 2;
  width: 98%;
`