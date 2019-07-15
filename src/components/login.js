import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../redux/action-creators/login';

const handleSubmit = (e, login, { formData }, setFormData) => {
  e.preventDefault();
  // console.log(formData.username, formData.password);
  // console.log(e.target);
  login(formData.username, formData.password);
  // setFormData({ username: '', password: '' });
};

const Login = ({ isAuthenticated, isLoading, username, login }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  // console.log(isAuthenticated, isLoading, status, username);
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isAuthenticated ? (
        <Redirect
          to={{
            pathname: '/',
            state: {
              // status: 'user',
              username: username,
              isAuthenticated: true
            }
          }}
        />
      ) : (
        <div>
          <form
            onSubmit={e => handleSubmit(e, login, { formData }, setFormData)}
          >
            <div>
              username:{' '}
              <input
                placeholder='username'
                value={formData.username}
                onChange={e => {
                  // console.log(formData);
                  setFormData({ ...formData, username: e.target.value });
                }}
              />
            </div>
            <div>
              password:{' '}
              <input
                placeholder='password'
                value={formData.password}
                onChange={e =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div>
              <input type='submit' value='Login' />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    isLoading: state.login.isLoading,
    // status: state.login.status,
    username: state.login.username
  };
};

const mapDispatchToProps = dispatch => {
  return { login: (username, password) => dispatch(login(username, password)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
