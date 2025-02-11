import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

const fetchData = (productId, startDate, endDate, granularity) => async dispatch => {
  dispatch({ type: FETCH_DATA_REQUEST });

  try {
    // Convert startDate and endDate to Unix time strings
    const startTimestamp = new Date(startDate).getTime() / 1000;
    const endTimestamp = new Date(endDate).getTime() / 1000;

    const response = await axios.get('/api/candles', {
      params: {
        product_id: productId,
        start_date: startTimestamp,
        end_date: endTimestamp,
        granularity: granularity
      }
    });
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, error: error.response ? error.response.data.error : error.message });
  }
};

export { fetchData };