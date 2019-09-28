// your components will all go in this `component` directory.
import React from 'react'

// component
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = ({
  todos,
  todo,
  handleChange,
  handleSubmit,
  handleComplete,
  handleDelete,
}) => {
  return (
    <div>
      <TodoForm
        todo={todo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ul>
        {todos &&
          todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
    </div>
  )
}

export default TodoList
