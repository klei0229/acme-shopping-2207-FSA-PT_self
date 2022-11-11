import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { updateAuth } from '../store';
import axios from 'axios';
import { Grid, Typography, TextField } from '@mui/material';

const UpdateAddress = ({ addresses, auth }) => {
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

	useEffect(() => {
		if (addresses && auth) {
			const last = addresses.length - 1;
			const address = addresses[last];
			if (address) {
				setAddress({
					id: address.id,
					label: address.label,
					street1: address.street1,
					street2: address.street2,
					city: address.city,
					state: address.state,
					zipcode: address.zipcode,
					country: address.country,
					userId: auth.id,
				});
			}
		}
	}, [addresses, auth]);

	const saveAddress = async (ev) => {
		ev.preventDefault();
		try {
			await axios.put(`/api/addresses/${address.id}`, address);
			await dispatch(updateAuth(auth));
		} catch (ex) {
			console.log(ex.response.data);
		}
	};

	return (
		<div>
			<Fragment>
				<form onSubmit={saveAddress}>
					<Typography variant='h6' gutterBottom>
						Shipping Address
					</Typography>
					<div>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<TextField
									required
									name='label'
									label='Address Label'
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
					<button>Update Address</button>
				</form>
			</Fragment>
		</div>
	);
};

export default UpdateAddress;
