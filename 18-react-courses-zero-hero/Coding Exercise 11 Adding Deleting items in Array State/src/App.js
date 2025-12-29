import React from "react";

// Don't rename the "App" component
function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, value: "Todo item 1" },
    { id: 2, value: "Todo item 2" },
    { id: 3, value: "Todo item 3" },
  ]);

  function handleAddTodo(event) {
    const id = (todos[todos.length - 1]?.id || 0) + 1;
    const newTodo = {
      id,
      value: `Todo item ${id}`,
    };

    // TODO: Add new todo to the existing `todos` array
    setTodos((prevtodos) => [...prevtodos, newTodo]);
  }

  function handleDeleteTodo(todoId) {
    // TODO: Delete selected todo from the existing `todos` array
    setTodos((prevtodos) => prevtodos.filter((todo) => todo.id !== todoId));
  }

  // Don't change the implemnetation
  return (
    <section>
      <button onClick={handleAddTodo}>Add new todo</button>
      <h2>Todos</h2>
      {todos.length > 0 ? (
        <ul>
          {todos.map(({ id, value }) => (
            <li key={id}>
              {value}{" "}
              <button onClick={() => handleDeleteTodo(id)}>delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't added any todo</p>
      )}
    </section>
  );
}

export default App;
