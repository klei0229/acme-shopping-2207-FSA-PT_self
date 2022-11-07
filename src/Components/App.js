import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import Profile from './Profile';
import Checkout from './Checkout';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart } from '../store';
import { Link, Routes, Route } from 'react-router-dom';

const App = () => {
	const { auth } = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loginWithToken());
	}, []);

	useEffect(() => {
		if (auth.id) {
			dispatch(fetchCart());
		}
	}, [auth]);
	return (
		<div>
			<h1>Acme Shopping</h1>
			{auth.id ? <Home /> : <Login />}
			{!!auth.id && (
				<div>
					<nav>
						<Link to='/'>Home</Link>
						<Link to='/cart'>Cart</Link>
						<Link to='/profile'>Profile</Link>
						<Link to='/checkout'>Checkout</Link>
					</nav>
					<Routes>
						<Route path='/' element={<h3>Home</h3>} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/checkout' element={<Checkout />} />
					</Routes>
				</div>
			)}
		</div>
	);
};

export default App;
