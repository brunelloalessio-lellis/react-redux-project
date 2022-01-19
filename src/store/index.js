import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from './counter';
import authSliceReducer from './auth';

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
  },
});

export default store;

/*
OLD REDUCER!

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

  if (action.type === "toggleShow") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};*/
