import React, { useState } from 'react';

export default function TodoInsert(): JSX.Element {
  const [taskInput, setTaskInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button
        type="button"
        onClick={() => console.log(`Will add todo: ${taskInput}`)}
      >
        Add
      </button>
    </div>
  );
}
