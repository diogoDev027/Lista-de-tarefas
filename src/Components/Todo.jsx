const Todo = ({ todo, removerTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-throung" : todo }}
    >
      <div className="content">
        <p className="category">{todo.category}</p>
        <p>{todo.text}</p>
      </div>
      <div>
        <button className="complete">Completar</button>
        <button className="remove" onClick={() => removerTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
