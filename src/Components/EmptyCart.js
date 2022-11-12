import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, CssBaseline } from '@mui/material';
import BundleBest from './BundleBest';

const EmptyCart = () => {
  return (
    <Container>
      <CssBaseline />
      <div>
        <br />
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
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
        <BundleBest />
        <br />
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
      </div>
    </Container>
  );
};

export default EmptyCart;
