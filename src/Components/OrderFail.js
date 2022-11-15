import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Typography, CssBaseline } from '@mui/material';

const OrderFail = () => {
  return (
    <Container>
      <CssBaseline />
      <div>
        <br />
        <Typography variant="h3" gutterBottom sx={{ mt: 2 }}>
          Your order did not go through
        </Typography>
        <br />
        <Link to={`/bundles`}>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            RETURN TO CART
          </Typography>
        </Link>
      </div>
    </Container>
  );
};

export default OrderFail;
