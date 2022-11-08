import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  Select,
  FormControl,
  FormHelperText,
  MenuItem,
} from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { addQtyCart, removeQtyCart } from '../store';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    size: '',
    frequency: '',
  });

  const onChange = (ev) => {
    setInputs({
      ...inputs,
      [ev.target.name]: ev.target.value,
    });
  };

  useEffect(() => {
    console.log('cart changed!');
  }, [cart]);

  return (
    <Container>
      <CssBaseline />
      {cart.lineItems.length > 0 ? (
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
                    alignItems="left"
                    justifyContent="left"
                    spacing={0}
                    direction="row"
                  >
                    {/* Name */}

                    <Grid item xs={12} sm={3}>
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

                    {/* Frequency*/}

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

                    <Grid item xs={12} sm={3} align="center">
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
                      <ListItemText
                        primary={
                          '$ ' + lineItem.bundle.price * lineItem.quantity
                        }
                      />
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
      ) : (
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
          'Your cart is empty. Grab some bundles! '
        </Typography>
      )}
    </Container>
  );
};

export default Cart;
