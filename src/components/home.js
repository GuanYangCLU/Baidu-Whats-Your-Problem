import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser, login } from '../redux/action-creators/login';

const Home = ({ isAuthenticated, username }) => {
  if (localStorage.token) {
    loadUser(localStorage.token);
  }

  return (
    <div>
      {isAuthenticated ? (
        <div className='nav'>
          <ul>
            <li>Register Comming Soon</li>
            <li>
              <Link
                to={{
                  pathname: '/login',
                  state: {
                    isAuthenticated: isAuthenticated,
                    username: username
                  }
                }}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <Redirect
          to={{
            pathname: '/login'
          }}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: token => dispatch(loadUser(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
