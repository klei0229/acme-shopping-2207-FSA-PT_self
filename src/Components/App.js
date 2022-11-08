import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import Profile from './Profile';
import Checkout from './Checkout';
import Bundle from './Bundle';
import BundleDetail from './BundleDetail';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart, fetchBundles } from '../store';
import { Link, Routes, Route } from 'react-router-dom';

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
					{/* <nav>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/bundles">Bundles</Link>
          </nav> */}
					<Routes>
						<Route path='/' element={<h3>Home</h3>} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/checkout' element={<Checkout />} />
						<Route path='/bundles' element={<Bundle />} />
						<Route path='/bundles/:id' element={<BundleDetail />} />
					</Routes>
				</div>
			)}
		</div>
	);
};

export default App;
