import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: Array<Todo>;
  toggleTodo: ToggleTodo;
  modifyTodo: ModifyTodo;
  deleteTodo: DeleteTodo;
}

export default function TodoList({
  todoList,
  toggleTodo,
  modifyTodo,
  deleteTodo
}: TodoListProps): JSX.Element {
  return (
    <div>
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          modifyTodo={modifyTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
