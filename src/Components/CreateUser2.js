import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { attemptLogin } from '../store';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

const CreateUser2 = () => {
	const theme = createTheme();
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
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Container component='main' maxWidth='sm'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<br />
				<br />
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				<Box component='form' noValidate onSubmit={create} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='user-name'
								name='username'
								required
								fullWidth
								id='username'
								label='Username'
								autoFocus
								value={user.username}
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='new-password'
								value={user.password}
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='given-name'
								name='firstName'
								required
								fullWidth
								id='firstName'
								label='First Name'
								autoFocus
								value={user.firstName}
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='lastName'
								label='Last Name'
								name='lastName'
								autoComplete='family-name'
								value={user.lastName}
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								value={user.email}
								onChange={onChange}
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						Sign Up
					</Button>
					<Grid container justifyContent='center'>
						<Grid item>
							<Typography>
								<Link href='/' variant='subtitle1' gutterBottom sx={{ mt: 2 }}>
									Have an account? Sign in!
								</Link>
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);

	return (
		<div>
			{['CREATE ACCOUNT'].map((anchor) => (
				<React.Fragment key={anchor}>
					<Button
						variant='contained'
						sx={{ minWidth: '100%' }}
						onClick={toggleDrawer(anchor, true)}
					>
						{anchor}
					</Button>
					<Drawer
						anchor={'right'}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
};

export default CreateUser2;
