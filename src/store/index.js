const { createStore } = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "+") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "-") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);