import React, { Fragment, useEffect, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const baseURL = "https://poodzia-pern-todo.herokuapp.com";

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      const body = { description };

      await fetch(`${baseURL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>

      <form className="d-flex mt-5" onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
