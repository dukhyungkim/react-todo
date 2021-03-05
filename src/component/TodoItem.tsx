import React from 'react';
import { Todo } from '../util/todo';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps): JSX.Element {
  return (
    <div>
      {todo.task}
      <button type="button" onClick={() => console.log('Will Modify')}>
        수정
      </button>
      <button type="button" onClick={() => console.log('Will Delete')}>
        삭제
      </button>
    </div>
  );
}
