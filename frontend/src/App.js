import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/dataActions';

const App = () => {
  const dispatch = useDispatch();
  const message = useSelector(state => state.data.message);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>{message ? message : 'Loading...'}</h1>
    </div>
  );
};

export default App;