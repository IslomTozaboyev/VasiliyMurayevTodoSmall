import React, { useContext } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Context from "../context";

const TodoItem = ({ todo, index, onChange }) => {
  const { removeTodo } = useContext(Context);

  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <div className={`d-flex align-items-center ${classes.join(" ")}`}>
          <div className="input-group-text me-3">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              checked={todo.completed}
              onChange={() => onChange(todo.id)}
            />
          </div>
          <b>{index}</b> &nbsp;
          {todo.title}
        </div>
        <button
          // onClick={() => removeTodo(todo.id)}
          onClick={removeTodo.bind(null, todo.id)}
          className="btn btn-outline-danger"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </li>
    </>
  );
};

TodoItem.propsTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
