import React, { useState, useEffect } from 'react';
import { updateAuth } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';

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
			<h2>Profile</h2>
			<form onSubmit={save}>
				<TextField
					name='username'
					label='Username'
					variant='outlined'
					value={user.username}
					onChange={onChange}
				/>
				<TextField
					name='firstName'
					label='First Name'
					variant='outlined'
					value={user.firstName}
					onChange={onChange}
				/>
				<TextField
					name='lastName'
					label='Last Name'
					variant='outlined'
					value={user.lastName}
					onChange={onChange}
				/>
				<TextField
					name='email'
					label='Email'
					variant='outlined'
					value={user.email}
					onChange={onChange}
				/>
				<input type='file' ref={(x) => setEl(x)} />
				<button>Update Profile</button>
			</form>
			<img src={data} />
		</div>
	);
};

export default Profile;
