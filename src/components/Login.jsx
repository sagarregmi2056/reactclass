import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const usenavigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://66712b38e083e62ee43a5e4f.mockapi.io/bihanakoclass", {
        username,
        password,
      })
      .then((response) => {
        console.log(response.data);
        usenavigate("/getdata"); // Redirect to dashboard page after successful login.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <br />
        {`username: ${username}`}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        {`password: ${password}`}
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;

// axios
