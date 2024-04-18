import "./App.css";

import { useState } from "react";

import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";
import Search from "./Components/Search";
import Filter from "./Components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Vamos para casa",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Terminar o trabalho da faculdade",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Fazer uma planilha",
      category: "Trabalho",
      isCompleted: false,
    },
  ]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )

          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .filter(
            (todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase()) ||
              todo.category.toLowerCase().includes(search.toLowerCase())
          )

          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
