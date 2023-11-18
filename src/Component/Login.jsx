import { useState } from "react";
import './Login.css'

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={emailChangeHandler}
          type="email"
          name="email"
          id="email"
          placeholder="youremail@gmail.com"
          autoComplete="off"
          required
        />

        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={passwordChangeHandler}
          type="password"
          name="password"
          id="password"
          placeholder="********"
          required
        />

        <button type="submit">Login</button>
      </form>

      <button onClick={() => props.onFormSwitch('register')}>Don't have an account ? Register here</button>
    </>
  );
}
