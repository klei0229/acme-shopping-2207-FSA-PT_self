import axios from 'axios';

const orders = (state = [], action) => {
  if (action.type === 'SET_ORDER') {
    return action.orders;
  }
  if (action.type === 'CREATE_ORDER') {
    return [...state, action.orders];
  }
  return state;
};

export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      const response = await axios.get('/api/orders', {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: 'SET_ORDER', orders: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const createOrder = (total, tax) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      const response = await axios.post(
        '/api/orders',
        {
          total: total,
          tax: tax,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({ type: 'CREATE_ORDER', orders: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export default orders;
