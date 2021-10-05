import { createStore, applyMiddleware } from "redux";

const initialState = {
  inputTask: "",
  items: [],
  takeTask: [],
  evaluateTask: [],
  doneTask: [],
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);

  switch (action.type) {
    case "ADD_TASK":
      return Object.assign({}, state, { inputTask: action.text });
    case "SUBMIT":
      return Object.assign({}, state, {
        items: state.items.concat(state.inputTask),
        inputTask: "",
      });
    case "TAKE_TASK":
      return Object.assign({}, state, {
        takeTask: state.takeTask.concat(state.items[action.index]),
        items: state.items.filter(function (item) {
          return item !== state.items[action.index];
        }),
      });
    case "EVALUATE_TASK":
      return Object.assign({}, state, {
        evaluateTask: state.evaluateTask.concat(state.takeTask[action.index]),
        takeTask: state.takeTask.filter(function (item) {
          return item !== state.takeTask[action.index];
        }),
      });
    case "DONE_TASK":
      return Object.assign({}, state, {
        doneTask: state.doneTask.concat(state.evaluateTask[action.index]),
        evaluateTask: state.evaluateTask.filter(function (item) {
          return item !== state.evaluateTask[action.index];
        }),
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
