import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addQtyCart, removeQtyCart } from '../store';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
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
  MenuItem,
} from '@mui/material';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const calcSubtotal = (lineItems) => {
    return parseFloat(
      lineItems.reduce((sum, lineItem) => {
        if (lineItem.size === 'Large') {
          if (lineItem.frequency === 'Annually') {
            return sum + lineItem.quantity * lineItem.bundle.price * 1.75 * 12;
          }
          return sum + lineItem.quantity * lineItem.bundle.price * 1.75;
        } else if (lineItem.size === 'Small') {
          if (lineItem.frequency === 'Annually') {
            return sum + lineItem.quantity * lineItem.bundle.price * 1.0 * 12;
          }
          return sum + lineItem.quantity * lineItem.bundle.price * 1.0;
        }
      }, 0)
    ).toFixed(2);
  };

  const subtotal = calcSubtotal(cart.lineItems) * 1;
  const taxes = parseFloat(subtotal * 0.08).toFixed(2);
  const total = parseFloat(subtotal + taxes * 1).toFixed(2);

  return (
    <Container>
      <CssBaseline />
      {cart.lineItems.length > 0 ? (
        <Grid container spacing={5}>
          <Grid item xs={12} sm={9}>
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
                    justifyContent="center"
                    spacing={0}
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
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Order Summary
            </Typography>
            <hr />

            <Grid container>
              <Grid container>
                <Grid item item xs={12} sm={6}>
                  <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                    Subtotal
                  </Typography>
                </Grid>
                <Grid item item xs={12} sm={6} align="right">
                  <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                    {subtotal}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item item xs={12} sm={6}>
                  <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                    Shipping
                  </Typography>
                </Grid>
                <Grid item item xs={12} sm={6} align="right">
                  <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                    Free
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                  Taxes
                </Typography>
              </Grid>
              <Grid item item xs={12} sm={6} align="right">
                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                  {taxes}
                </Typography>
              </Grid>
            </Grid>

            <hr />
            <Grid container>
              <Grid item item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                  Total
                </Typography>
              </Grid>
              <Grid item item xs={12} sm={6} align="right">
                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                  {total}
                </Typography>
              </Grid>
            </Grid>

            <br />
            <Button variant="contained" fullWidth>
              CONTINUE TO CHECKOUT
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          YOUR CART IS EMPTY
        </Typography>
      )}
    </Container>
  );
};

export default Cart;
