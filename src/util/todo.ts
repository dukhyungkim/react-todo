let currentId = 0;
export default function createNewTodo(newTask: string): Todo {
  const newTodo: Todo = {
    id: currentId,
    task: newTask,
    complete: false
  };
  currentId += 1;
  return newTodo;
}
