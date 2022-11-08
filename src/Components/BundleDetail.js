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
} from '@mui/material';

const BundleDetail = () => {
	const { id } = useParams();
	const { bundles } = useSelector((state) => state);
	const [bundle, setBundle] = useState({});
	const [products, setProducts] = useState([]);

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
				<h1>{bundle.name}</h1>
				<h4>
					<Link to={'/bundles'}>Return to our other bundles</Link>
				</h4>
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
											pt: '56.25%',
										}}
										image={product.imageURL}
										alt={product.name}
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography gutterBottom variant='h5' component='h2'>
											{product.name}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</div>
		</div>
	);
};

export default BundleDetail;
