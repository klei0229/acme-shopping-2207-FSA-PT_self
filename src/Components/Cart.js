import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addQtyCart, removeQtyCart, fetchCart } from '../store';
import EmptyCart from './EmptyCart';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {
  Card,
  CardContent,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  CssBaseline,
  Button,
  ButtonGroup,
  Select,
  FormControl,
  MenuItem,
  Box,
  Stack,
} from '@mui/material';
import AddressForm from './AddressForm';
import CreateAddress from './CreateAddress';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shipping, setShipping] = useState({});

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  useEffect(() => {
    if (cart.address) {
      setShipping(cart.address);
    }
  }, [cart]);

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

  const subtotal = parseFloat(calcSubtotal(cart.lineItems) * 1).toFixed(2);
  const tax = parseFloat(subtotal * 1 * 0.08).toFixed(2);
  const total = parseFloat(subtotal * 1 + tax * 1).toFixed(2);

  const checkout = async () => {
    const response = await axios.post('/api/stripe/checkout', [
      {
        total: total,
        name: 'Bundles',
        quantity: 1,
      },
    ]);
    window.open(response.data);
    window.close();
  };

  return (
    <Container>
      <br />
      <br />
      <br />
      <CssBaseline />
      {cart.lineItems.length > 0 ? (
        <Grid container spacing={5}>
          <Grid item xs={12} sm={9}>
            <Typography variant="h3" gutterBottom sx={{ mt: 2 }}>
              Cart
            </Typography>
            <hr />
            <List disablePadding>
              {cart.lineItems.map((lineItem) => (
                <ListItem key={lineItem.id} sx={{ py: 2, px: 0 }}>
                  <Grid
                    container
                    alignItems="left"
                    justifyContent="center"
                    spacing={2}
                    direction="row"
                  >
                    {/* Image */}
                    <Grid item xs={12} sm={2} align="center">
                      <img
                        src={lineItem.bundle.imageUrl}
                        width={75}
                        height={75}
                      />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12} sm={2} justifyContent="center">
                      <ListItemText
                        primary={lineItem.bundle.name}
                        secondary={lineItem.size + ' / ' + lineItem.frequency}
                      />
                    </Grid>

                    {/* Size */}
                    <Grid item xs={12} sm={2} align="center">
                      <FormControl sx={{ minWidth: 70 }} size={'small'}>
                        <Select
                          name="size"
                          value={lineItem.size}
                          onChange={(ev) => {
                            dispatch(
                              addQtyCart(
                                lineItem.bundle,
                                0,
                                ev.target.value,
                                lineItem.frequency
                              )
                            );
                          }}
                        >
                          <MenuItem value={'Small'}>Small</MenuItem>
                          <MenuItem value={'Large'}>Large</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Frequency */}
                    <Grid item xs={12} sm={2} align="center">
                      <FormControl sx={{ minWidth: 70 }} size={'small'}>
                        <Select
                          name="frequency"
                          value={lineItem.frequency}
                          onChange={(ev) => {
                            dispatch(
                              addQtyCart(
                                lineItem.bundle,
                                0,
                                lineItem.size,
                                ev.target.value
                              )
                            );
                          }}
                        >
                          <MenuItem value={'Monthly'}>Monthly</MenuItem>
                          <MenuItem value={'Annually'}>Annually</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Quantity */}
                    <Grid item xs={12} sm={2} align="center">
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button
                          onClick={(ev) =>
                            dispatch(removeQtyCart(lineItem.bundle, 1))
                          }
                        >
                          -
                        </Button>
                        {<Button disabled>{lineItem.quantity}</Button>}
                        {
                          <Button
                            onClick={(ev) =>
                              dispatch(
                                addQtyCart(
                                  lineItem.bundle,
                                  1,
                                  lineItem.size,
                                  lineItem.frequency
                                )
                              )
                            }
                          >
                            +
                          </Button>
                        }
                      </ButtonGroup>
                    </Grid>

                    {/* Price */}
                    <Grid item xs={12} sm={1} align="center">
                      <ListItemText primary={calcSubtotal([lineItem])} />
                    </Grid>

                    {/* Delete LineItem */}
                    <Grid item xs={12} sm={1} align="center">
                      <DeleteOutlinedIcon
                        onClick={(ev) =>
                          dispatch(
                            removeQtyCart(
                              lineItem.bundle,
                              lineItem.quantity,
                              lineItem.size,
                              lineItem.frequency
                            )
                          )
                        }
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h3" gutterBottom sx={{ mt: 2 }}>
              Summary
            </Typography>
            <hr />

            <Grid container>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                    Subtotal
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} align="right">
                  <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                    {subtotal}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                    Shipping
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} align="right">
                  <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                    Free
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                  Tax
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} align="right">
                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                  {tax}
                </Typography>
              </Grid>
            </Grid>

            <hr />
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                  Total
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} align="right">
                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                  {total}
                </Typography>
              </Grid>
            </Grid>

            <br />
            <Button variant="contained" fullWidth onClick={checkout}>
              CONTINUE TO CHECKOUT
            </Button>
          </Grid>
          <Grid item xs={12}>
            <AddressForm />
          </Grid>
          <Grid item xs={12}>
            <CreateAddress />
          </Grid>
          <Grid container xs={12} spacing={0}>
            {!shipping.label ? (
              <div>
                <br />
                <Typography variant="h6"> Add a shipping address</Typography>
              </div>
            ) : (
              <Card xs={12}>
                <CardContent align="left">
                  <Typography variant="h6">
                    Current Shipping Address: {shipping.label}
                  </Typography>
                  <Typography variant="subtitle1">
                    <Stack>
                      <p>Street 1: {shipping.street1}</p>
                      <p>
                        Street 2: {!shipping.street2 ? 'N/A' : shipping.street2}
                      </p>
                      <p>City: {shipping.city}</p>
                      <p>State: {shipping.state}</p>
                      <p>Postal Code: {shipping.zipcode}</p>
                      <p>Country: {shipping.country}</p>
                    </Stack>
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};

export default Cart;
