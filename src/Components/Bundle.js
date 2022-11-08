import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Typography,
	Button,
	AppBar,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Toolbar,
	Container,
} from '@mui/material';

const Bundle = () => {
	const { bundles } = useSelector((state) => state);
	return (
		<div>
			<ul>
				{bundles.map((bundle) => {
					return (
						<li key={bundle.id}>
							<Link to={`/bundles/${bundle.id}`}>{bundle.name}</Link>
						</li>
					);
				})}
			</ul>
			{/* <main>
				<div>
					<Container maxWidth='sm'>
						<Typography
							variant='h2'
							align='center'
							color='textPrimary'
							gutterBottom
						>
							Bundles
						</Typography>
						<Typography
							variant='h5'
							align='center'
							color='textSecondary'
							paragraph
						>
							Check our selection of bundles made for every taste! No matter if
							you choose based on region, season or cookies, be sure we have
							curated the best selection of snacks just for you! <br /> Enjoy!
						</Typography>
						<div>
							<Grid container spacing={2} justify='center'>
								<Grid item>
									<Button variant='outlined' color='primary'>
										I want to taste a part of the world
									</Button>
								</Grid>

								<Grid item>
									<Button variant='outlined' color='primary'>
										Give me something for this time of the year
									</Button>
								</Grid>

								<Grid item>
									<Button variant='outlined' color='primary'>
										I'm just feeling adventurous!
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container maxWidth='md'>
					<Grid container spacing={4}>
						{bundles.map((bundle) => {
							return (
								<Grid item key={bundle.id} xs='12' sm='6' md='4'>
									<Card>
										<CardMedia
											image=''
											title='Snacks'
										/>
										<CardContent>
											<Typography gutterBottom variant='h5'>
												Snacks from {student.firstName}
											</Typography>
											<Typography>
												{' '}
												This bundle contianes a couple of the most sophisticated
												snacks from the land of {student.firstName}
											</Typography>
										</CardContent>
										<CardActions>
											<Button size='small' color='primary'>
												Buy
											</Button>
											<Button size='small' color='secondary'>
												View
											</Button>
										</CardActions>
									</Card>
								</Grid>
							);
						})}
					</Grid>
				</Container>
			</main>
			<footer>
				<Typography>Footer</Typography>
			</footer> */}
		</div>
	);
};

export default Bundle;
