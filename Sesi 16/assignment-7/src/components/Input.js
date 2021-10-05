import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Input() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const addTask = (evt) => {
    dispatch({
      type: "ADD_TASK",
      text: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: "SUBMIT",
    });
  };

  return (
    <div class="input-group mb-3">
      <form onSubmit={handleSubmit}>
        <input
          value={state.inputTask}
          onChange={addTask}
          placeholder="New Task"
        />
        <button
          className="btn btn-primary mx-2"
          disabled={state.inputTask.length < 1}
        >
          Save to Backlog
        </button>
      </form>
    </div>
  );
}

export default Input;
