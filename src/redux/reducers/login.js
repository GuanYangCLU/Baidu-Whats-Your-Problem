const initState = {
  status: null,
  username: null,
  isAuthenticated: false,
  isLoading: false
};

const login = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true };
    case 'LOGIN_SUCCESS':
      return { ...state, ...payload, isAuthenticated: true, isLoading: false };
    case 'LOGIN_ERROR':
      return { ...state, ...payload, isLoading: false };
    default:
      return state;
  }
};

export default login;
