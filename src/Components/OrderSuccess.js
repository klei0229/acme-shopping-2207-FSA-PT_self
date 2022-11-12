import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Typography, CssBaseline } from '@mui/material';
// import { createOrder } from '../store';

const OrderSuccess = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(createOrder());
  // }, []);

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

export default OrderSuccess;
