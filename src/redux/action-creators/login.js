import { users } from '../../config/fakedb';

const loginStart = () => {
  console.log('login start!');
  return {
    type: 'LOGIN_START',
    payload: {}
  };
};

const loginSuccess = (status, username) => {
  console.log('login success!');
  return {
    type: 'LOGIN_SUCCESS',
    payload: { status: status, username: username }
  };
};

const loginError = err => {
  console.log('login error!');
  return {
    type: 'LOGIN_ERROR',
    payload: { error: err }
  };
};

export const login = (username, password) => dispatch => {
  dispatch(loginStart());
  console.log('login start!');
  const rs = users.filter(user => {
    return user.username === username && user.password === password;
  });
  if (rs.length > 0) {
    if (rs[0].status === 'admin') {
      dispatch(loginSuccess(rs[0].status, rs[0].username));
    } else if (rs[0].status === 'user') {
      dispatch(loginSuccess(rs[0].status, rs[0].username));
    }
  } else {
    dispatch(loginError('No user found or password does not match'));
  }
};
