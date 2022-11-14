import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link} from 'react-router-dom';
import { addQtyCart, fetchCart} from '../../store';
import { useSnackbar } from 'notistack';

function Copyright() {
	return (
		<Typography variant='body2' color='text.secondary' align='center'>
			{'Copyright © '}
			{/* <Link color='inherit' href='/'>
				WorldMunchies
			</Link>{' '} */}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}



const theme = createTheme();

const BundleBest = () => {
	const  {enqueueSnackbar} = useSnackbar();
	
	const dispatch = useDispatch();
	const {cart} = useSelector((state) => state);
	const { bundles } = useSelector((state) => state);
	const [_bundles, setBundles] = useState([]);
	useEffect(() => {
		if (bundles.length) {
            const featured = bundles.filter(bundle => bundle.type === 'best')
			setBundles(featured);
		}
		dispatch(fetchCart());
	}, [bundles]);
	const handleClickVariant = (bundle) => {
    
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
			<main>
				{/* Hero unit */}
				<Box
					sx={{
						bgcolor: 'background.paper',
						pt: 8,
						pb: 6,
					}}
				>
					<Container maxWidth='sm' sx={{mt:4}}>
						<Typography
							component='h1'
							variant='h2'
							align='center'
							color='text.primary'
							gutterBottom
						>
							Bundles
						</Typography>
						<Typography
							variant='h5'
							align='center'
							color='text.secondary'
							paragraph
						>
							Check our selection of bundles made for every taste! No matter if
							you choose based on region, season or cookies, be sure we have
							curated the best selection of snacks just for you! <br /> Enjoy!
						</Typography>
						<Stack
							sx={{ pt: 4 }}
							direction='row'
							spacing={2}
							justifyContent='center'
						>
                            <Link to='/bundles' style={{textDecoration: "none"}}><Button>All</Button></Link>
							<Link to='/bundles/featured' style={{textDecoration: "none"}}><Button>Featured</Button></Link>
							<Link to='/bundles/new' style={{textDecoration: "none"}}><Button>New</Button></Link>
							<Link to='/bundles/best' style={{textDecoration: "none"}}><Button>Best Sellers</Button></Link>
						</Stack>
					</Container>
				</Box>
				<Container  sx={{ py: 0 , alignContent:"center"}} maxWidth='xl'>
					{/* End hero unit */}
					<Grid container spacing={10} sx={{justifyContent:"center"}}>
					{_bundles.map((bundle) => (
              <Grid item key={bundle.id} xs={12} sm={6} md={3}>
                <Card
                align="center"
                style={{ border: "none", boxShadow: "none" }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                   
                    
                  }}
                >
                  <Box>
                <div className="container">
                  <Link
                        to={`/bundles/${bundle.id}`}
                        
                        style={{ textDecoration: 'none', color: "inherit" }}
                      >
                        <img className="image" style={{width: "100%", height: 250}} src={bundle.imageUrl} alt={bundle.name} />
                        <div className="middle">
                          <div className="text">View </div>
                        </div>
                  {/* <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      maxWidth: '100%',
                      height: 250,
                     }                 
                  }
                    image={bundle.imageUrl}
                    alt={bundle.name}
                  /> */}
                  
                  <CardContent sx={{ flexGrow: 1, color: 'inherit', textDecoration: "none"}}>
                    <Typography align = "center" gutterBottom variant="h5" component="h2">
                      {bundle.name}
                    </Typography>
                    <Typography>{bundle.description}</Typography>
                  </CardContent>

                  </Link>
                  </div>
                  </Box>
                  <CardActions sx={{justifyContent:"center"}}>
                    
                    <Button
                    sx={{mb:2, transition: "all 0.2s ease",
                    "&:hover": {
                     transform: "scale3d(1.6, 1.6, 1)",
                   }}}
                      size="small"
                      variant="contained"
                      style={{ textDecoration: 'none' }}
                      onClick={(ev) => {
                        ev.preventDefault();
                        handleClickVariant(bundle)
                      }}
                    >
                        Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
					</Grid>
				</Container>
			</main>
			{/* Footer */}
			<Box sx={{ bgcolor: 'background.paper', p: 6 }} component='footer'>
				<Typography variant='h6' align='center' gutterBottom></Typography>
				<Typography
					variant='subtitle1'
					align='center'
					color='text.secondary'
					component='p'
				>
					Made with love
				</Typography>
				<Copyright />
			</Box>
			{/* End footer */}
		</ThemeProvider>
	);
};

export default BundleBest;
