import { createContext, useState } from "react";

export const TodoContext = createContext({
  todos: [],
  setTodos: () => {},
});

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
