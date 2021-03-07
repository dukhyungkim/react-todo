type Todo = {
  id: number;
  task: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
type ModifyTodo = (selectedTodo: Todo, modifiedTask: string) => void;
type DeleteTodo = (selectedTodo: Todo) => void;
