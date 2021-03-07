import React, { useState } from 'react';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  modifyTodo: ModifyTodo;
  deleteTodo: DeleteTodo;
}

export default function TodoItem({
  todo,
  toggleTodo,
  modifyTodo,
  deleteTodo
}: TodoItemProps): JSX.Element {
  const [modifiedTask, setModifiedTask] = useState(todo.task);
  const [toggleModify, setToggleModify] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModifiedTask(e.target.value);
  };

  const handleModify = () => {
    modifyTodo(todo, modifiedTask);
    setToggleModify(false);
  };

  return (
    <div>
      {!toggleModify && (
        <div className={todo.complete ? styles.complete : undefined}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo)}
          />
          {todo.task}
          <button type="button" onClick={() => setToggleModify(true)}>
            Modify
          </button>
          <button type="button" onClick={() => deleteTodo(todo)}>
            Delete
          </button>
        </div>
      )}
      {toggleModify && (
        <div>
          <input type="text" value={modifiedTask} onChange={handleChange} />
          <button type="button" onClick={handleModify}>
            Ok
          </button>
          <button type="button" onClick={() => setToggleModify(false)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
