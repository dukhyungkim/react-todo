import React, { useEffect, useState } from 'react';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';
import TodoStatus from './component/TodoStatus';
import createNewTodo from './util/todo';

export default function App(): JSX.Element {
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const addTodo = (newTask: string) => {
    const newTodo: Todo = createNewTodo(newTask);
    setTodoList([...todoList, newTodo]);
  };
  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodoList = todoList.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };
  const modifyTodo: ModifyTodo = (selectedTodo, modifiedTask) => {
    const newTodoList = todoList.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          task: modifiedTask
        };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };
  const deleteTodo: DeleteTodo = selectedTodo => {
    const newTodoList = todoList.filter(todo => todo !== selectedTodo);
    setTodoList(newTodoList);
  };

  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    setTotal(todoList.length);
  }, [todoList]);

  const [done, setDone] = useState<number>(0);
  useEffect(() => {
    setDone(todoList.filter(todo => todo?.complete === true).length);
  }, [todoList]);

  return (
    <div>
      <TodoStatus total={total} done={done} />
      <TodoInsert addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        modifyTodo={modifyTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
