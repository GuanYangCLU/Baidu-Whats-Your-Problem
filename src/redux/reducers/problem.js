const initState = {
  isLoading: false
};

const problem = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    //   case 'GET_PROBLEMS_START':
    case 'GET_PROBLEM_BY_ID_START':
      return { ...state, isLoading: true };
    //   case 'GET_PROBLEMS_SUCCESS':
    case 'GET_PROBLEM_BY_ID_SUCCESS':
      return { ...state, ...payload, isLoading: false };
    //   case 'GET_PROBLEMS_ERROR':
    case 'GET_PROBLEM_BY_ID_ERROR':
      return { ...state, ...payload, isLoading: false };

    default:
      return state;
  }
};

export default problem;
