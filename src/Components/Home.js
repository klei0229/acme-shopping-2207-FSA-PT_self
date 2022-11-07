import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';

import ResponsiveAppBar from './Navbar';

const Home = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      {/* <h1>Home</h1>
      <div>
        Welcome { auth.username }!!
        <button onClick={()=> dispatch(logout())}>Logout</button>
        {
          !!auth.avatar && <img src={auth.avatar} />
        }
      </div> */}
    </div>
  );
};

export default Home;
