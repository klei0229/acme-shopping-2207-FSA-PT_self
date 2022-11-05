import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  CssBaseline,
} from '@mui/material';

const bundles = [
  {
    name: 'South Korean Bundle',
    desc: 'Blurb here...',
    price: '$9.99',
  },
  {
    name: 'Italian Bundle',
    desc: 'Blurb here...',
    price: '$3.45',
  },
  {
    name: 'Christmas Bundle',
    desc: 'Blurb here...',
    price: '$3.45',
  },
];
const Cart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <Container>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Typography variant="h6" gutterBottom>
            Cart
          </Typography>

          <List disablePadding>
            {bundles.map((bundle) => (
              <ListItem key={bundle.name} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={bundle.name} secondary={bundle.desc} />
                <Typography variant="body2">{bundle.price}</Typography>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Order Summary
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
