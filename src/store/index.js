import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
    showCounter: true,
  },
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

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
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
