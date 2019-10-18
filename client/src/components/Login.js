import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  const login = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  return (
    <div className="login-form">
      <h2>React Bubbles Login</h2>
      <form onSubmit={login}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Log In</button>
      </form>
    </div>
  );
};


  export default Login;
