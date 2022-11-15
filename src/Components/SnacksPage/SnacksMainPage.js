import * as React from 'react';
import { Container, Paper, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Typography, CssBaseline, Link, Tooltip } from '@mui/material';
import SnackItemCard from './SnackItemCard';
import { useEffect, useState } from 'react';

function LandingPage() {
	const navigate = useNavigate();
	const { filter } = useParams();
	const bundles = useSelector((state) => state.bundles);
	const [products, setProducts] = useState([]);

	let productArray = [];

	useEffect(() => {
		try {
			bundles.forEach((bundle) => {
				productArray = productArray.concat(bundle.products);
			});
			setProducts(productArray);
		} catch (ex) {
			console.log(ex);
		}
	}, [bundles]);

	const filtered = products.filter(
		(product) => !filter || product.name.toLowerCase().includes(filter)
	);

	return (
		<div>
			<CssBaseline />
			<br></br>
			<br></br>
			<Container maxWidth='sm' sx={{ mt: 4 }}>
				<Typography
					component='h2'
					variant='h3'
					align='center'
					color='text.primary'
					gutterBottom
				>
					Snacks
				</Typography>
				<Typography
					variant='h7'
					align='center'
					color='text.secondary'
					paragraph
				>
					These are all the potential snacks you can receive from one of our
					bundles. Have a look!
				</Typography>
				<br />
			</Container>
			<Container align='center'>
				<TextField
					style={{ width: '25%' }}
					id='outlined-basic'
					label='Search'
					variant='outlined'
					value={filter || ''}
					placeholder='What are you craving?'
					onChange={(ev) => navigate(`/snacks/${ev.target.value}`)}
				/>
			</Container>
			<br />
			<Container sx={{ mt: 5 }} maxWidth='xl' align='center'>
				<Grid container spacing={4}>
					{filtered.map((product) => {
						let bundle = bundles.find((x) => x.id === product.bundleId);
						return (
							<Grid item md={3} key={product.id}>
								<Tooltip title='Check out this bundle!' arrow>
									<Link
										color='black'
										underline='none'
										href={`#/bundles/${bundle.id}`}
									>
										<SnackItemCard card={product}></SnackItemCard>
									</Link>
								</Tooltip>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</div>
	);
}

export default LandingPage;
