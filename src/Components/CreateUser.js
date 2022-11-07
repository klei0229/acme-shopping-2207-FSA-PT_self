import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { attemptLogin } from '../store';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const CreateUser = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const onChange = (ev) => {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  };

  const create = async (ev) => {
    ev.preventDefault();
    const credentials = { username: user.username, password: user.password };
    try {
      await axios.post('/api/users', user);
      setUser({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
      });
      dispatch(attemptLogin(credentials));
    } catch (error) {
      setError(ex.response.data);
    }
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={create}>
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          value={user.username}
          onChange={onChange}
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          value={user.password}
          onChange={onChange}
        />
        <TextField
          name="firstName"
          label="First Name"
          variant="outlined"
          value={user.firstName}
          onChange={onChange}
        />
        <TextField
          name="lastName"
          label="Last Name"
          variant="outlined"
          value={user.lastName}
          onChange={onChange}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          value={user.email}
          onChange={onChange}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default CreateUser;
