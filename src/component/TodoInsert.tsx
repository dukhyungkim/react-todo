import React, { useState } from 'react';

interface TodoInsertProps {
  addTodo: (newTask: string) => void;
}

export default function TodoInsert({ addTodo }: TodoInsertProps): JSX.Element {
  const [task, setTask] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    addTodo(task);
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleChange} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
