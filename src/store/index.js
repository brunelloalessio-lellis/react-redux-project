const { createStore } = require("redux");

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state = initialState, action) => {
  if (action.type === "+") {
    return {
      ...state,
      counter: state.counter + action.amount || 1,
    };
  }
  if (action.type === "-") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if(action.type === 'toggleShow'){
      return {
          ...state,
          showCounter: !state.showCounter
      }
  }

  return state;
};

const store = createStore(counterReducer);
export default store;
