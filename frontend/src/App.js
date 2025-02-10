import React, { useReducer } from 'react';
import Topbar from './components/Topbar';
import dataReducer from './reducers/dataReducer';
import { fetchData } from './actions/dataActions';

const App = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    loading: false,
    data: null,
    error: null
  });

  const handleFetchData = (productId, startDate, endDate, granularity) => {
    fetchData(productId, startDate, endDate, granularity)(dispatch);
  };

  return (
    <div>
      <Topbar onFetchData={handleFetchData} />
      {state.loading && <h1>Loading...</h1>}
      {state.error && <h1 style={{ color: 'red' }}>{state.error}</h1>}
      {state.data && <pre>{JSON.stringify(state.data, null, 2)}</pre>}
    </div>
  );
};

export default App;