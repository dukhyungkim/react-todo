import React, { useEffect, useState } from 'react';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';
import TodoStatus from './component/TodoStatus';
import { Todo, TodoSamples } from './util/todo';

export default function App(): JSX.Element {
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  // const total = todoList.length;
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    setTotal(todoList.length);
  }, [todoList]);
  // const done = todoList.filter(todo => todo?.complete === true).length;
  const [done, setDone] = useState<number>(0);
  useEffect(() => {
    setDone(todoList.filter(todo => todo?.complete === true).length);
  }, [todoList]);

  return (
    <div>
      <TodoStatus total={total} done={done} />
      <TodoInsert />
      <TodoList todoList={todoList} />
    </div>
  );
}
