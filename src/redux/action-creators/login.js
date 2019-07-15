// import { users } from '../../config/fakedb';
import axios from 'axios';

const loginStart = () => {
  console.log('login start!');
  return {
    type: 'LOGIN_START',
    payload: {}
  };
};

const loginSuccess = res => {
  console.log('login success!', res);
  return {
    type: 'LOGIN_SUCCESS',
    payload: {}
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

export const loadUser = token => dispatch => {
  //
};
