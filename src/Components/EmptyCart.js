import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  CssBaseline,
  Divider,
  Grid,
} from '@mui/material';
import NowTrendingCard from './LandingPage/NowTrendingCard';

const EmptyCart = () => {
  const { bundles } = useSelector((state) => state);
  const [trendingBundles, setTrendingBundles] = React.useState([]);

  React.useEffect(() => {
    if (bundles.length) {
      const featured = bundles.filter((bundle) => bundle.type === 'featured');
      setTrendingBundles(featured);
      console.log(featured);
    }
    console.log(trendingBundles);
  }, [bundles]);
  return (
    <Container>
      <CssBaseline />
      <div>
        <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
          YOUR CART IS EMPTY
        </Typography>
        <img
          src="https://icons.iconarchive.com/icons/3dlb/3d-vol2/256/shopping-cart-icon.png"
          width={100}
          height={100}
        />
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          We think you might like...
        </Typography>
        <br />

        <Container maxWidth="xs">
          <Divider variant="middle"></Divider>
        </Container>
        <br></br>
        <Container maxWidth="xl">
          {/* <QuiltedImageList></QuiltedImageList> */}
          <Grid container align="center" spacing={8}>
            {trendingBundles.map((bundle) => {
              return (
                <Grid item key={bundle.id} align="center" xs={3}>
                  {/* <h1>1</h1> */}
                  <NowTrendingCard card={bundle}></NowTrendingCard>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <br />
        <Link to={`/bundles`}>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            RETURN TO BUNDLES
          </Typography>
        </Link>
        <br />
        {/* <Link to={`/orders`}>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            REVIEW ORDERS
          </Typography>
        </Link> */}
      </div>
    </Container>
  );
};

export default EmptyCart;
