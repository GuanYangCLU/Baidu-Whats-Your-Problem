const initState = {
  token: localStorage.getItem('token'),
  // username: null,
  isAuthenticated: false,
  isLoading: false
};

const login = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true };
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', payload.username + "'s token");
      // generally should return official token by server, here just causal @@
      return { ...state, ...payload, isAuthenticated: true, isLoading: false };
    case 'LOGIN_ERROR':
      return { ...state, ...payload, isLoading: false };
    case 'LOAD_USER':
      return { ...state, ...payload, isAuthenticated: true, isLoading: false };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return { ...state, ...payload, isAuthenticated: false, isLoading: false };
    default:
      return state;
  }
};

export default login;
