import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import Profile from './Profile';
import Checkout from './Checkout';
import AddressForm from './AddressForm';
import Bundle from './Bundle/Bundle';
import LandingPage from './LandingPage';
import BundleDetail from './Bundle/BundleDetail';
import OrderSuccess from './OrderSuccess';
import OrderFail from './OrderFail';
import Orders from './Orders';
import { SnackbarProvider } from 'notistack';
import BundleFeatured from './Bundle/BundleFeatured';
import BundleNew from './Bundle/BundleNew';
import BundleBest from './Bundle/BundleBest';
import SnacksMainPage from './SnacksPage/SnacksMainPage';
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
		<SnackbarProvider maxSnack={3}>
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
							<Route path='/' element={<LandingPage />} />
							<Route path='/cart' element={<Cart />} />
							<Route path='/profile' element={<Profile />} />
							<Route path='/checkout' element={<AddressForm />} />
							<Route path='/bundles' element={<Bundle />} />
							<Route path='/snacks' element={<SnacksMainPage />} />
							<Route path='/bundles/:id' element={<BundleDetail />} />
							<Route path='/bundles/featured' element={<BundleFeatured />} />
							<Route path='/bundles/new' element={<BundleNew />} />
							<Route path='/bundles/best' element={<BundleBest />} />
							<Route path='/order-success' element={<OrderSuccess />} />
							<Route path='/order-fail' element={<OrderFail />} />
							<Route path='/orders' element={<Orders />} />
						</Routes>
					</div>
				)}
			</div>
		</SnackbarProvider>
	);
};

export default App;
