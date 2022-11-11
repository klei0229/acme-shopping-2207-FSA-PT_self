import React, { useEffect, useState, Fragment } from 'react';
import { updateAuth } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import {
	Grid,
	Typography,
	TextField,
	FormControlLabel,
	Checkbox,
} from '@mui/material';

const Profile = () => {
	const { auth } = useSelector((state) => state);
	const [el, setEl] = useState(null);
	const [data, setData] = useState('');
	const dispatch = useDispatch();
	const [user, setUser] = useState({
		username: auth.username,
		firstName: auth.firstName,
		lastName: auth.lastName,
		email: auth.email,
		avatar: auth.avatar,
	});
	const [address, setAddress] = useState({
		street1: '',
		street2: '',
		city: '',
		state: '',
		zipcode: '',
		country: '',
		isShipping: true,
	});

	const onChange = (ev) => {
		setUser({ ...user, [ev.target.name]: ev.target.value });
		setAddress({ ...address, [ev.target.name]: ev.target.value });
	};

	useEffect(() => {
		if (el) {
			el.addEventListener('change', (ev) => {
				const file = ev.target.files[0];
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.addEventListener('load', () => {
					setData(reader.result);
				});
			});
		}
		if (auth) {
			const _address = auth.addresses[0];
			if (_address) {
				setAddress({
					street1: _address.street1,
					street2: _address.street2,
					city: _address.city,
					state: _address.state,
					zipcode: _address.zipcode,
					country: _address.zipcode,
					isShipping: _address.isShipping,
				});
			}
		}
	}, [auth, el]);

	const save = async (ev) => {
		ev.preventDefault();
		const newAuth = {
			username: user.username,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			avatar: data,
		};
		const newAddress = {
			street1: address.street1,
			street2: address.street2,
			city: address.city,
			state: address.state,
			zipcode: address.zipcode,
			country: address.zipcode,
			isShipping: address.isShipping,
		};
		try {
			console.log(newAddress);
			await dispatch(updateAuth(newAuth));
			el.value = '';
			setData('');
		} catch (error) {
			setError(ex.response.data);
		}
	};
	return (
		<div>
			<Fragment>
				<Typography variant='h6' gutterBottom>
					Profile
				</Typography>
				<form onSubmit={save}>
					<Grid container spacing={3} style={{ padding: '0 20px' }}>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								name='username'
								label='Username'
								variant='standard'
								fullWidth
								value={user.username}
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								name='firstName'
								label='First Name'
								variant='standard'
								fullWidth
								value={user.firstName}
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								name='lastName'
								label='Last Name'
								variant='standard'
								fullWidth
								value={user.lastName}
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								name='email'
								label='Email'
								variant='standard'
								fullWidth
								value={user.email}
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<label>Upload a user photo: </label>
							<input type='file' ref={(x) => setEl(x)} />
						</Grid>
					</Grid>
					<br />
					<Typography variant='h6' gutterBottom>
						Shipping Address
					</Typography>
					<div>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<TextField
									required
									name='street1'
									label='Address line 1'
									fullWidth
									variant='standard'
									value={address.street1}
									onChange={onChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									name='street2'
									label='Address line 2'
									fullWidth
									variant='standard'
									value={address.street2}
									onChange={onChange}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									name='city'
									label='City'
									fullWidth
									variant='standard'
									value={address.city}
									onChange={onChange}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									name='state'
									label='State/Province/Region'
									fullWidth
									variant='standard'
									value={address.state}
									onChange={onChange}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									name='zipcode'
									label='Zipcode / Postal code'
									fullWidth
									variant='standard'
									value={address.zipcode}
									onChange={onChange}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									name='country'
									label='Country'
									fullWidth
									variant='standard'
									value={address.country}
									onChange={onChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox
											color='secondary'
											name='isShipping'
											value={address.isShipping}
										/>
									}
									label='Use this address for shipping details'
								/>
							</Grid>
						</Grid>
					</div>
					<button>Update Profile and Shipping Address</button>
				</form>
				<img src={data} />
			</Fragment>
		</div>
	);
};

export default Profile;
