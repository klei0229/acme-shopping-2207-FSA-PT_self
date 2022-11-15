import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../store';
import {
  Container,
  Typography,
  CssBaseline,
  Divider,
  Grid,
} from '@mui/material';
import NowTrendingCard from './LandingPage/NowTrendingCard';
//comment

const OrderSuccess = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
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

  const calcSubtotal = (lineItems) => {
    return parseFloat(
      lineItems.reduce((sum, lineItem) => {
        if (lineItem.size === 'Large') {
          if (lineItem.frequency === 'Annually') {
            return sum + lineItem.quantity * lineItem.bundle.price * 1.75 * 11;
          }
          return sum + lineItem.quantity * lineItem.bundle.price * 1.75;
        } else if (lineItem.size === 'Small') {
          if (lineItem.frequency === 'Annually') {
            return sum + lineItem.quantity * lineItem.bundle.price * 1.0 * 11;
          }
          return sum + lineItem.quantity * lineItem.bundle.price * 1.0;
        }
      }, 0)
    ).toFixed(2);
  };

  useEffect(() => {
    console.log(cart);
    if (cart.lineItems.length > 0) {
      const subtotal = parseFloat(calcSubtotal(cart.lineItems) * 1).toFixed(2);
      const tax = parseFloat(subtotal * 1 * 0.08).toFixed(2);
      const total = parseFloat(subtotal * 1 + tax * 1).toFixed(2);
      dispatch(createOrder(total, tax));
    }
  }, [cart]);

  return (
    <Container>
      <CssBaseline />
      <div>
        <br />
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          YOUR ORDER WAS PLACED
        </Typography>
        <img
          src="https://img.freepik.com/premium-vector/box-packaging-white-background-isometric_44074-6270.jpg?w=1480"
          width={100}
          height={100}
        />
        <Link to={`/bundles`}>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            RETURN TO SHOP
          </Typography>
        </Link>
        <br />
        <Link to={`/orders`}>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            REVIEW ORDERS
          </Typography>
        </Link>
        <br />
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Check out these trending bundles!
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
      </div>
    </Container>
  );
};

export default OrderSuccess;
