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
  Button,
  ButtonGroup,
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
  // const displayCounter = true;
  // const state = { counter: 0 };

  // handleIncrement = () => {
  //   this.setState((state) => ({ counter: state.counter + 1 }));
  // };

  // handleDecrement = () => {
  //   this.setState((state) => ({ counter: state.counter - 1 }));
  // };

  return (
    <Container>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Cart
          </Typography>
          <hr />
          <List disablePadding>
            {cart.lineItems.map((lineItem) => (
              <ListItem key={lineItem.id} sx={{ py: 1, px: 0 }}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  spacing={0}
                  direction="row"
                >
                  <Grid item xs={12} sm={4}>
                    <ListItemText
                      primary={lineItem.bundle.name}
                      secondary={lineItem.size + ' / ' + lineItem.frequency}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <ListItemText primary={lineItem.bundle.price} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <ButtonGroup
                      size="small"
                      aria-label="small outlined button group"
                    >
                      <Button>-</Button>
                      {<Button disabled>{lineItem.quantity}</Button>}
                      {<Button>+</Button>}
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Order Summary
          </Typography>
          <hr />
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            Subtotal
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            Shipping - Free
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            Taxes
          </Typography>
          <hr />
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            Total
          </Typography>
          <br />
          <Button variant="contained" fullWidth>
            CONTINUE TO CHECKOUT
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
