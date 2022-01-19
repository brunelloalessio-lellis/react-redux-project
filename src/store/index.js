import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      const amount = action.payload || 1;
      state.counter = state.counter + amount;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
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
