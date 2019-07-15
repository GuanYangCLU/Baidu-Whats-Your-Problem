// import { users } from '../../config/fakedb';
import axios from 'axios';

const loginStart = () => {
  console.log('login start!');
  return {
    type: 'LOGIN_START',
    payload: {}
  };
};

const loginSuccess = data => {
  console.log('login success!', data);
  return {
    type: 'LOGIN_SUCCESS',
    payload: { username: data.username }
  };
};

const loginError = err => {
  console.log('login error!', err);
  return {
    type: 'LOGIN_ERROR',
    payload: { error: err }
  };
};

export const login = (username, password) => async dispatch => {
  dispatch(loginStart());
  // console.log('login start!');

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post(
      'http://api.haochuan.io/login?noError=1',
      body,
      config
    );
    dispatch(loginSuccess(res.data));
    // res.data: {username: xx, password: xx}
  } catch (err) {
    dispatch(loginError(err));
  }
};

export const loadUser = () => dispatch => {
  // let user be authenticated everytime the token exist, in each Components
  // once send loadUser, get authenticated automatically

  // console.log('user load here ' + localStorage.token);
  if (localStorage.token) {
    dispatch({
      type: 'LOAD_USER',
      payload: { token: localStorage.token }
    });
  }
};

export const logout = () => dispatch => {
  if (localStorage.token) {
    dispatch({
      type: 'LOGOUT',
      payload: {} //token: ''
    });
  }
};
