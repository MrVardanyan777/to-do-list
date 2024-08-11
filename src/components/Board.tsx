import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TaskItem from "./TaskItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Board = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem: Todo = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <section className="w-1/2 h-3/4 shadow-xl rounded-lg bg-[#dfe6e9] flex justify-between items-center flex-col p-5">
      <div className="w-full flex items-center gap-3 p-2 shadow-2xl">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-full outline-none p-2 flex-1 font-serif tracking-wider text-[18px] bg-transparent border-black border-b-2"
          placeholder="What's in your mind?"
        />
        <button onClick={addTodo}>
          <AddCircleOutlineIcon
            fontSize="large"
            sx={{
              ":hover": {
                color: "orange",
                transition: ".3s",
                cursor: "pointer",
              },
            }}
          />
        </button>
      </div>

      <div className="w-full h-full flex flex-col gap-2 items-center justify-start my-4 overflow-y-scroll overflow-x-hidden no-scrollbar">
      {filteredTodos.map(todo => (
          <TaskItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>

      <div className="w-full flex justify-between font-serif items-center p-2 border-t border-black">
          <span>
            {todos.filter((todo) => !todo.completed).length} items left
          </span>
          <div className="flex justify-center gap-3">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
          </div>
          <button onClick={clearCompleted}>Clear completed</button>
      </div>
    </section>
  );
};

export default Board;
