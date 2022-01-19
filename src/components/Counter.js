import { Component } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({
      type: "toggleShow",
    });
  };

  const incrementHandler = () => {
    dispatch({
      type: "+",
    });
  };
  const decrementHandler = () => {
    dispatch({
      type: "-",
    });
  };
  const incrementBy5Handler = () => {
    dispatch({
      type: "+",
      amount: 5,
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBy5Handler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

/*class Counter extends Component {
  toggleCounterHandler = () => {};

  incrementHandler = () => {
    this.props.increment();
  };
  decrementHandler = () => {
    this.props.decrement();
  };

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}> {this.props.counter} </div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => {
      dispatch({ type: "+" });
    },
    decrement: () => {
      dispatch({ type: "-" });
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);*/

export default Counter;
