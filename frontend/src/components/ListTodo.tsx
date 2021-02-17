import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";
import Todo from "../interfaces/Todo";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id: number) => {
    try {
      await fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo: Todo) => todo.todo_id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo: Todo, i) => {
            return (
              <tr key={i}>
                <td>{todo.todo_id}</td>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.todo_id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
