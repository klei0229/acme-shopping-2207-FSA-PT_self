import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
	Fab,
	CssBaseline
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { addQtyCart, fetchCart } from '../../store';

const theme = createTheme();

const BundleDetail = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const {cart} = useSelector((state) => state);
	const { bundles } = useSelector((state) => state);
	const [bundle, setBundle] = useState({});
	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (bundles.length) {
			const bundle = bundles.find((bundle) => bundle.id === id);
			setBundle(bundle);
			setProducts(bundle.products);
		}
		dispatch(fetchCart());

	}, [bundles]);
	const  {enqueueSnackbar} = useSnackbar();
	const handleClickVariant = () => {
    
		const item = cart.lineItems.find(lineItem => lineItem.bundleId === bundle.id)
		if (item) {
		  dispatch(addQtyCart(
			item.bundle,
			1,
			item.size,
			item.frequency));
		  } else {
			dispatch(addQtyCart(bundle))
		  }
		enqueueSnackbar('Item added to your cart!', { variant: 'success' });
	  }
	return (
		<ThemeProvider theme={theme}>
     
		<CssBaseline />
		<div>
			<Box>
			<div>
			<Fab variant="extended"  color= 'primary' sx={{
				margin: 0,
				top: 'auto',
				right: 20,
				bottom: 20,
				left: 'auto',
				position: 'fixed',
				}} onClick={(ev) => {
					ev.preventDefault();
					handleClickVariant()
				  }}>
			<AddIcon sx={{ mr: 1 }} />
        Add to Cart
      </Fab>
	  <br/>
				<h1>{bundle.name}</h1>
				<Button sx={{mt:4}}>
					<Link to={'/bundles'} style={{textDecoration: "none"}}>Return to our other bundles</Link>
				</Button>
			</div>
			<div>
				<Container sx={{ py: 8 }} maxWidth='md'>
					<Grid container spacing={4}>
						{products.map((product) => (
							<Grid item key={product.id} xs={12} sm={6} md={4}>
								<Card
									sx={{
										height: '100%',
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									<CardMedia
										component='img'
										sx={{
											// 16:9
											width: 'auto',
											height: 250,
										}}
										image={product.imageURL}
										alt={product.name}
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography align = "center" gutterBottom variant='h5' component='h2'>
											{product.name}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</div>
			</Box>
		</div>
		</ThemeProvider>
	);
};

export default BundleDetail;
