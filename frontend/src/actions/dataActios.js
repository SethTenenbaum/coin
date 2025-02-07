export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = (productId, startDate, endDate, granularity) => async dispatch => {
  dispatch({ type: FETCH_DATA_REQUEST });

  try {
    const response = await axios.get('/api/candles', {
      params: {
        product_id: productId,
        start_date: startDate,
        end_date: endDate,
        granularity: granularity
      }
    });
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, error: error.response ? error.response.data.error : error.message });
  }
};