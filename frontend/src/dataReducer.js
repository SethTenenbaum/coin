const initialState = {
  message: ''
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;