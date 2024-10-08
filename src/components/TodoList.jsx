const TodoList = ({ todos , onToggle , onDelete }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map(( todo ) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
          >
            {todo.text}
          </span>
          <button onClick={() => onToggle(todo.id)}>
            {todo.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={()=> onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
