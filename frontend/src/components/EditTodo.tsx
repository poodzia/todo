import React, { Fragment, useState } from "react";
import Todo from "../interfaces/Todo";

interface props {
  todo: Todo;
}

function EditTodo({ todo }: props) {
  const [description, setDescription] = useState(todo.description);

  const baseURL = "https://poodzia-pern-todo.herokuapp.com:4000";

  const updateDescription = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      const body = { description };
      await fetch(`${baseURL}/todos/${todo.todo_id}`, {
        method: "PUT",
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
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}>
        Edit
      </button>

      <div
        className="modal fade"
        id={`id${todo.todo_id}`}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        onClick={() => setDescription(todo.description)}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Edit Todo
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setDescription(todo.description)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}>
                Close
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={e => updateDescription(e)}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditTodo;
