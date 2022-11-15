import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../store';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Container from '@mui/system/Container';
import CssBaseline from '@mui/material/CssBaseline';

function Row(orders) {
  const { row } = orders;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} hover="true">
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          {'OR-'.concat(String(row.id).substring(1, 13).toUpperCase())}
        </TableCell>
        <TableCell align="left">{Date(row.updatedAt)}</TableCell>
        <TableCell align="right">{row.discount || 0}</TableCell>
        <TableCell align="right">{row.tax || 0}</TableCell>
        <TableCell align="right">{row.total || 0}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Line Items:
              </Typography>
              <Table size="small" aria-label="orders">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Transaction Timestamp</TableCell>
                    <TableCell align="left">Bundle Name</TableCell>
                    <TableCell align="left">Size</TableCell>
                    <TableCell align="left">Frequency</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.lineItems.map((lineItemRow) => (
                    <TableRow key={lineItemRow.id} hover="true">
                      <TableCell component="th" scope="row">
                        {Date(lineItemRow.updatedAt)}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {lineItemRow.bundle.name}
                      </TableCell>
                      <TableCell align="left"> {lineItemRow.size} </TableCell>
                      <TableCell align="left">
                        {lineItemRow.frequency}
                      </TableCell>
                      <TableCell align="right">
                        {lineItemRow.quantity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const Orders = () => {
  const { orders } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <Container>
      <br />
      <br />
      <br />
      <CssBaseline />
      <Typography variant="h3" gutterBottom component="div" align="center">
        Order History
      </Typography>
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="left">Order No.</TableCell>
              <TableCell align="left">Transaction Timestamp</TableCell>
              <TableCell align="right">Discount</TableCell>
              <TableCell align="right">Tax</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Orders;
