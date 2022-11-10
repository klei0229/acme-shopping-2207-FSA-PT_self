import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import Profile from './Profile';
import Checkout from './Checkout';
import Bundle from './Bundle';
import BundleDetail from './BundleDetail';
import OrderSuccess from './OrderSuccess';
import OrderFail from './OrderFail';
import Orders from './Orders';

import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart, fetchBundles } from '../store';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginWithToken());
    dispatch(fetchBundles());
  }, []);

  useEffect(() => {
    if (auth.id) {
      dispatch(fetchCart());
    }
  }, [auth]);
  return (
    <div>
      {auth.id ? <Home /> : <Login />}
      {!!auth.id && (
        <div>
          <Routes>
            <Route path="/" element={<h3>Home</h3>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/bundles" element={<Bundle />} />
            <Route path="/bundles/:id" element={<BundleDetail />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/order-fail" element={<OrderFail />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
