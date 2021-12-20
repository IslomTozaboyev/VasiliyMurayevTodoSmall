import React, { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },

    clear: () => setValue(""),
    value: () => value,
  };
}

const AddTodo = ({ onCreate }) => {
  const input = useInputValue("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  };

  return (
    <form className="mb-3 d-flex" onSubmit={submitHandler}>
      <input {...input.bind} className="form-control me-2" type="text" />
      <button className="btn btn-outline-primary">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
