import React, { useState } from 'react';
import { attemptLogin } from '../store';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';

const Login = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const onChange = (ev) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });
  };

  const login = (ev) => {
    ev.preventDefault();
    dispatch(attemptLogin(credentials));
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          value={credentials.username}
          onChange={onChange}
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          value={credentials.password}
          onChange={onChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
