import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, CssBaseline } from '@mui/material';
import { createOrder } from '../store';

const OrderSuccess = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

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
