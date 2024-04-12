import "./App.css";

import { useState } from "react";

import Todo from "./Components/Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Vamos para casa",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 1,
      text: "Terminar o trabalho da faculdade",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 1,
      text: "Fazer uma planilha",
      category: "Trabalho",
      isCompleted: false,
    },
  ]);

  const removerTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => (id !== id ? todo : null));
    setTodos(filteredTodos);
  };

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removerTodo={removerTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
