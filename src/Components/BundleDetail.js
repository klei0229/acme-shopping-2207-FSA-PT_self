import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
	Card,
	Grid,
	Container,
	CardContent,
	CardMedia,
	Typography,
	Button,
	Box,
	ToggleButtonGroup,
	ToggleButton,
	CssBaseline,
} from '@mui/material';
import SnackItemCard from './SnacksPage/SnackItemCard';

const BundleDetail = () => {
	const { id } = useParams();
	const { bundles } = useSelector((state) => state);
	const [bundle, setBundle] = useState({});
	const [products, setProducts] = useState([]);
	const [subscription, setSubscription] = useState('monthly');
	const [size, setSize] = useState('small');
	const basePrice = 14.99;
	const [price, setPrice] = useState(`$${basePrice}`);

	const handleSubscription = (event, newSubscription) => {
		console.log('clicked');
		console.log('last is:' + subscription);
		if (newSubscription !== null) {
			setSubscription(newSubscription);
			if (newSubscription == 'monthly') {
				if (size == 'small') {
					setPrice(`$${basePrice}`);
				} else {
					setPrice(`$${(basePrice * 1.75).toFixed(2)}`);
				}
			} else {
				if (size == 'small') {
					setPrice(`$${(basePrice * 1.75).toFixed(2)}`);
					console.log(1);
				} else {
					setPrice(`$${(basePrice * 11 * 1.75).toFixed(2)}`);
				}
			}
		}
	};

	const handleSize = (event, newSize) => {
		if (newSize !== null) {
			setSize(newSize);
			if (newSize == 'large') {
				if (subscription == 'monthly') {
					setPrice(`$${(basePrice * 1.75).toFixed(2)}`);
					console.log(1);
				} else {
					setPrice(`$${(basePrice * 1.75 * 11).toFixed(2)}`);
				}
			} else {
				if (subscription == 'monthly') {
					setPrice(`$${basePrice}`);
					console.log(1);
				} else {
					setPrice(`$${(basePrice * 11).toFixed(2)}`);
				}
			}
		}
	};

	const description =
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.";

	const addToCart = () => {
		console.log(subscription);
		console.log(size);
	};

	useEffect(() => {
		if (bundles.length) {
			const bundle = bundles.find((bundle) => bundle.id === id);
			setBundle(bundle);
			setProducts(bundle.products);
		}
	}, [bundles]);

	return (
		<div>
			<div>
				<Container sx={{ py: 8 }} maxWidth='lg'>
					<Grid container spacing={2}>
						<Grid item md={7}>
							<CardMedia
								component='img'
								height='100%'
								image={bundle.imageUrl}
								alt='image'
							/>
						</Grid>
						<Grid item md={5}>
							<Container
								sx={{
									margin: '5',
								}}
							>
								<Typography variant='h3' gutterBottom>
									{bundle.name}
								</Typography>
								<Typography variant='h4' gutterBottom>
									{price}
								</Typography>
								<Typography variant='p' gutterBottom>
									{description}
								</Typography>
								<br></br>
								<br></br>
								<Typography variant='h5' gutterBottom>
									Frequency
								</Typography>
								<ToggleButtonGroup
									value={subscription}
									exclusive
									onChange={handleSubscription}
									aria-label='subscription'
									fullWidth='true'
								>
									<ToggleButton value='monthly' aria-label='monthly'>
										Monthly
									</ToggleButton>
									<ToggleButton value='annually' aria-label='annually'>
										Annually
									</ToggleButton>
								</ToggleButtonGroup>
								<br></br>
								<br></br>

								<Typography variant='h5'>Size</Typography>
								<ToggleButtonGroup
									value={size}
									exclusive
									onChange={handleSize}
									aria-label='small'
									fullWidth='true'
								>
									<ToggleButton value='small' aria-label='small'>
										Small
									</ToggleButton>
									<ToggleButton value='large' aria-label='large'>
										Large
									</ToggleButton>
								</ToggleButtonGroup>
								<br></br>
								<br></br>
								<Button
									sx={{ mt: '10' }}
									size='large'
									fullWidth='true'
									variant='contained'
									onClick={addToCart}
								>
									Add To Cart
								</Button>
								<Button sx={{ mt: 4 }} variant='contained'>
									<Link
										to={'/bundles'}
										style={{ textDecoration: 'none', color: 'white' }}
									>
										Return to our other bundles
									</Link>
								</Button>
							</Container>
						</Grid>
					</Grid>
					<br></br>
					<br></br>
					<Typography variant='h4'>This Bundle May Include</Typography>
					<br />
					<Typography variant='h3'>
						Each time you receive a delivery of this delicious bundle, you'll
						receive a randomized set of the snacks below. Just choose a size and
						frequency to start snacking!
					</Typography>
					<br />
					<Container maxWidth='lg' align='center'>
						<Grid container spacing={1}>
							{products.map((product) => {
								return (
									<Grid item md={3}>
										<SnackItemCard card={product}></SnackItemCard>
									</Grid>
								);
							})}
						</Grid>
					</Container>
				</Container>
			</div>
		</div>
	);
};

export default BundleDetail;
