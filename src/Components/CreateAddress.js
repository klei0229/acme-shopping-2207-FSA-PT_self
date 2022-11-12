import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, TextField } from '@mui/material';
import { loginWithToken } from '../store';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const CreateAddress = () => {
	const { auth } = useSelector((state) => state);
	const dispatch = useDispatch();
	const [address, setAddress] = useState({
		label: '',
		street1: '',
		street2: '',
		city: '',
		state: '',
		zipcode: '',
		country: '',
	});

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const onChange = (ev) => {
		setAddress({ ...address, [ev.target.name]: ev.target.value });
	};

	const save = async (ev) => {
		ev.preventDefault();
		address.userId = auth.id;
		try {
			await axios.post('/api/addresses', address);
			await dispatch(loginWithToken());
			handleClose();
		} catch (ex) {
			console.log(ex.response.data);
		}
	};

	return (
		<div>
			<Fragment>
				<Button variant='outlined' onClick={handleClickOpen}>
					Create a new address
				</Button>
				<Dialog open={open} onClose={handleClose}>
					<DialogTitle>Create a New Address</DialogTitle>
					<DialogContent>
						<DialogContentText>
							To start getting tasty bundles, create an address for your
							profile.
						</DialogContentText>
						<form onSubmit={save}>
							<Typography variant='h6' gutterBottom>
								Create a New Address to Save to your Profile
							</Typography>
							<div>
								<Grid container spacing={3}>
									<Grid item xs={12}>
										<TextField
											required
											name='label'
											label='New Address Label'
											fullWidth
											variant='standard'
											value={address.label}
											onChange={onChange}
										/>
									</Grid>
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
								</Grid>
							</div>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
						<Button onClick={save}>Create new Address</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		</div>
	);
};

export default CreateAddress;
