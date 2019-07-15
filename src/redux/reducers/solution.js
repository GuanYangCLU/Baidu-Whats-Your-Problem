const initState = {
  isLoading: false
};

const solution = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_SOLUTION_START':
      return { ...state, isLoading: true };
    case 'GET_SOLUTION_SUCCESS':
      return { ...state, ...payload, isLoading: false };
    case 'GET_SOLUTION_ERROR':
      return { ...state, ...payload, isLoading: false };
    case 'INIT_SOLUTION':
      return { ...state, ...payload, isLoading: false };
    default:
      return state;
  }
};

export default solution;
