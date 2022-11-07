import axios from 'axios';

const bundles = (state = { product: [] }, action) => {
  if (action.type === 'SET_BUNDLES') {
    return action.bundles;
  }
  return state;
};

export const fetchBundles = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/bundles');
    dispatch({ type: 'SET_BUNDLES', bundles: response.data });
  };
};

export default bundles;
