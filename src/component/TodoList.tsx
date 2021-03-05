import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../util/todo';

type TodoListProps = {
  todoList: Array<Todo>;
};

export default function TodoList({ todoList }: TodoListProps): JSX.Element {
  return (
    <div>
      {todoList.map(todo => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
}
