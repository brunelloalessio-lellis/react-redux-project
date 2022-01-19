import { useRef } from "react";
import classes from "./Auth.module.css";
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatcher = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

    if (
      emailRef.current.value.trim() !== "" &&
      passwordRef.current.value.trim() !== ""
    ) {
      dispatcher(authActions.login());
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onFormSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
