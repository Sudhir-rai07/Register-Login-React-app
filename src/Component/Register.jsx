import { useState } from "react";

export default function Register(props) {
   const [userName, setUserName] = useState('');
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const nameChangeHandler = (e) => {
    setUserName(e.target.value);
   }

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
    setUserName('');
  };
  return (
    <>
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
      <label htmlFor="name">Full name</label>
        <input
        value={userName}
        onChange={nameChangeHandler}
          type="text"
          name="name"
          id="name"
          placeholder="full Name"
          autoComplete="off"
          required
        />

        <label htmlFor="email">email</label>
        <input
        value={email}
        onChange={emailChangeHandler}
          type="email"
          name="email"
          id="email"
          placeholder="youremail@gmail.com"
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

        <button type="submit">Register</button>
      </form>

      <button onClick={() => props.onFormSwitch('login')}>Already have an account ? Login here</button>
    </>
  );
}
