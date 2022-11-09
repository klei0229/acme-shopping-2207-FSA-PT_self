import React, { useEffect, useState, Fragment } from 'react';
import { updateAuth } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, TextField } from '@mui/material';
import AddressForm from './AddressForm';

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
	console.log(auth);

	const onChange = (ev) => {
		setUser({ ...user, [ev.target.name]: ev.target.value });
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
	}, [el]);

	const save = async (ev) => {
		ev.preventDefault();
		const newAuth = {
			username: user.username,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			avatar: data,
		};
		try {
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
					<Grid container spacing={3}>
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
							<input type='file' ref={(x) => setEl(x)} />
						</Grid>
					</Grid>
					<br />
					<div>
						<AddressForm />
					</div>
					<button>Update Profile</button>
				</form>
				<img src={data} />
			</Fragment>
		</div>
	);
};

export default Profile;
