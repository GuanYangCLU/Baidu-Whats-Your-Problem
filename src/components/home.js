import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser, logout } from '../redux/action-creators/login';
import { getProblems } from '../redux/action-creators/problems';

const Home = ({ isAuthenticated, getProblems, problems, loadUser, logout }) => {
  useEffect(() => {
    // console.log('token: ' + localStorage.getItem('token'));
    loadUser();
    if (isAuthenticated) {
      getProblems();
    }
  }); // add logic: if auth, THEN load

  return (
    <div>
      {isAuthenticated ? (
        <div className='nav'>
          <div>
            <div>
              <button onClick={logout}>Logout</button>
            </div>
            <div>
              <ul>
                {problems.map(problem => {
                  return (
                    <li key={problem.id}>
                      <Link
                        to={{
                          pathname: `/${problem.id}`,
                          state: { id: problem.id }
                        }}
                      >
                        {problem.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
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
    isAuthenticated: state.login.isAuthenticated,
    problems: state.problems.problems // return format: problems:[{},{},...]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser()),
    getProblems: () => dispatch(getProblems()),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
