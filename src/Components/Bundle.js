import React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        WorldMunchies
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const Bundle = () => {
	const { bundles } = useSelector((state) => state);
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
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Bundles
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Check our selection of bundles made for every taste! No matter if you choose based on region, season or cookies, be sure we have curated the best selection of snacks just for you! <br /> Enjoy!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Featured</Button>
			  <Button variant="contained">New</Button>
			  <Button variant="contained">Best Sellers</Button>
              
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {bundles.map((bundle) => (
				
              <Grid item key={bundle.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={bundle.imageUrl}
					
                    alt={bundle.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {bundle.name}
                    </Typography>
                    <Typography>
                      {bundle.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Buy</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Made with love
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
// import React from 'react';
// import { useSelector } from 'react-redux';
// import {
// 	Typography,
// 	Button,
// 	AppBar,
// 	Card,
// 	CardActions,
// 	CardContent,
// 	CardMedia,
// 	CssBaseline,
// 	Grid,
// 	Toolbar,
// 	Container,
// } from '@mui/material';

// const Bundle = () => {
// 	const { bundles } = useSelector((state) => state);
// 	return (
// 		<div>
// 			<ul>
// 				{bundles.map((bundle) => {
// 					return <li key={bundle.id}>{bundle.name}</li>;
// 				}) || {}}
// 			</ul>
// 			{/* <main>
// 				<div>
// 					<Container maxWidth='sm'>
// 						<Typography
// 							variant='h2'
// 							align='center'
// 							color='textPrimary'
// 							gutterBottom
// 						>
// 							Bundles
// 						</Typography>
// 						<Typography
// 							variant='h5'
// 							align='center'
// 							color='textSecondary'
// 							paragraph
// 						>
// 							Check our selection of bundles made for every taste! No matter if
// 							you choose based on region, season or cookies, be sure we have
// 							curated the best selection of snacks just for you! <br /> Enjoy!
// 						</Typography>
// 						<div>
// 							<Grid container spacing={2} justify='center'>
// 								<Grid item>
// 									<Button variant='outlined' color='primary'>
// 										I want to taste a part of the world
// 									</Button>
// 								</Grid>

// 								<Grid item>
// 									<Button variant='outlined' color='primary'>
// 										Give me something for this time of the year
// 									</Button>
// 								</Grid>

// 								<Grid item>
// 									<Button variant='outlined' color='primary'>
// 										I'm just feeling adventurous!
// 									</Button>
// 								</Grid>
// 							</Grid>
// 						</div>
// 					</Container>
// 				</div>
// 				<Container maxWidth='md'>
// 					<Grid container spacing={4}>
// 						{bundles.map((bundle) => {
// 							return (
// 								<Grid item key={bundle.id} xs='12' sm='6' md='4'>
// 									<Card>
// 										<CardMedia
// 											image=''
// 											title='Snacks'
// 										/>
// 										<CardContent>
// 											<Typography gutterBottom variant='h5'>
// 												Snacks from {student.firstName}
// 											</Typography>
// 											<Typography>
// 												{' '}
// 												This bundle contianes a couple of the most sophisticated
// 												snacks from the land of {student.firstName}
// 											</Typography>
// 										</CardContent>
// 										<CardActions>
// 											<Button size='small' color='primary'>
// 												Buy
// 											</Button>
// 											<Button size='small' color='secondary'>
// 												View
// 											</Button>
// 										</CardActions>
// 									</Card>
// 								</Grid>
// 							);
// 						})}
// 					</Grid>
// 				</Container>
// 			</main>
// 			<footer>
// 				<Typography>Footer</Typography>
// 			</footer> */}
// 		</div>
// 	);
// };

export default Bundle;
