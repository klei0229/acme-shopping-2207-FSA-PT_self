import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken } from '../store';

const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loginWithToken());
  }, []);
  return (
    <div>
      <h1>Acme Shopping</h1>
      {
        auth.id ? <Home /> : <Login />
      }
    </div>
  );
};

export default App;
