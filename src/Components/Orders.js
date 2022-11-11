import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addQtyCart, removeQtyCart, fetchOrders } from '../store';
import EmptyCart from './EmptyCart';
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

const Orders = () => {
  const { orders } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <Container>
      <br />
      <CssBaseline />
      {orders.length > 0 ? (
        <Grid container spacing={5}>
          <Grid item xs={12} sm={9}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Orders
            </Typography>
            <hr />
            <List disablePadding>
              {orders.map((order) => (
                <ListItem key={order.id} sx={{ py: 1, px: 0 }}>
                  {' '}
                  {order.id}
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      ) : (
        <div>No orders</div>
      )}
    </Container>
  );
};

export default Orders;
