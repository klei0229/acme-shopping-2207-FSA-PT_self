import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithToken } from '../store';
import { Grid, Typography, TextField } from '@mui/material';

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

	const onChange = (ev) => {
		setAddress({ ...address, [ev.target.name]: ev.target.value });
	};

	const save = async (ev) => {
		ev.preventDefault();
		address.userId = auth.id;
		try {
			await axios.post('/api/addresses', address);
			await dispatch(loginWithToken());
		} catch (ex) {
			console.log(ex.response.data);
		}
	};

	return (
		<div>
			<Fragment>
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
					<button>Create New Address</button>
				</form>
			</Fragment>
		</div>
	);
};

export default CreateAddress;
