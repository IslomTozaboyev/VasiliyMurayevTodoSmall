import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import Context from "../context";
import Loader from "../miniComponents/Loader";
import ThreeLoading from "../miniComponents/ThreeLoading";
import Modal from "../miniComponents/Modal";

const AddTodo = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./AddTodo"));
      }, 2000);
    })
);

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 3000);
      });
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          title,
          completed: false,
        },
      ])
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="container p-4 mt-5 rounded shadow">
        <h3 className="fw-bold mb-4">React Todo</h3>

        <Modal />

        <React.Suspense fallback={<ThreeLoading />}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p className="text-danger text-center fs-3 fw-bold">No Todos !!!</p>
        )}
      </div>
    </Context.Provider>
  );
};

export default Todo;
