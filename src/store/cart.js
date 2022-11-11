import axios from 'axios';
const cart = (state = { lineItems: [] }, action) => {
  if (action.type === 'SET_CART') {
    return action.cart;
  }

  return state;
};

export const fetchCart = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    const response = await axios.get('/api/orders/cart', {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: 'SET_CART', cart: response.data });
  };
};

export const addQtyCart = (bundle, quantity, size, frequency) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    const response = await axios.post(
      '/api/orders/cart',
      {
        bundle,
        quantity,
        size,
        frequency,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: 'SET_CART', cart: response.data });
  };
};

export const removeQtyCart = (bundle, quantity) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    console.log(bundle);

    const response = await axios.put(
      '/api/orders/cart',
      {
        bundle,
        quantityToRemove: quantity,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: 'SET_CART', cart: response.data });
  };
};

export default cart;
