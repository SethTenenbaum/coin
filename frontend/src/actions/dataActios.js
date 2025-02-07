export const fetchData = () => async dispatch => {
  const response = await fetch('/api/data');
  const data = await response.json();
  dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data.message });
};