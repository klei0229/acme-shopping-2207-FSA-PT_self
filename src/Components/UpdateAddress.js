import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loginWithToken } from '../store';
import { Grid, Typography, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const UpdateAddress = () => {
	const { auth } = useSelector((state) => state);
	const dispatch = useDispatch();
	const [addresses, setAddresses] = useState([]);
	const [address, setAddress] = useState({
		label: '',
		street1: '',
		street2: '',
		city: '',
		state: '',
		zipcode: '',
		country: '',
	});

	useEffect(() => {
		if (auth) {
			setAddresses(auth.addresses);
			if (addresses && auth) {
				console.log(addresses);
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
		}
	}, [addresses, auth]);

	const onChange = (ev) => {
		setAddress({ ...address, [ev.target.name]: ev.target.value });
	};

	const changeAddress = (ev) => {
		ev.preventDefault();
		const id = ev.target.value;
		const newAddress = addresses.find((x) => x.id === id);
		setAddress(newAddress);
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

	return (
		<div>
			<Fragment>
				<form onSubmit={saveAddress}>
					<Typography variant='h6' gutterBottom>
						Shipping Address
					</Typography>
					<div>
						<label>Choose an address to update:</label>
						<select value={address.id} onChange={changeAddress}>
							{addresses.map((_address) => {
								return (
									<option key={_address.id} value={_address.id}>
										{_address.label}
									</option>
								);
							})}
						</select>
					</div>
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
