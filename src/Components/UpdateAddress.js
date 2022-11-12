import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loginWithToken } from '../store';
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const UpdateAddress = (_address) => {
	const dispatch = useDispatch();
	const [address, setAddress] = useState({});
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setAddress(_address);
	}, []);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const saveAddress = async (ev) => {
		ev.preventDefault();
		try {
			await axios.put(`/api/addresses/${address.id}`, address);
			await dispatch(loginWithToken());
		} catch (ex) {
			console.log(ex);
		}
	};

	const onChange = (ev) => {
		setAddress({ ...address, [ev.target.name]: ev.target.value });
	};

	return (
		<div>
			<Button variant='outlined' onClick={handleClickOpen}>
				Update {address.name} address
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Update this address</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Edit the details of your saved address.
					</DialogContentText>
					<Fragment>
						<form>
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
					</Fragment>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={saveAddress}>Update this Address</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default UpdateAddress;
