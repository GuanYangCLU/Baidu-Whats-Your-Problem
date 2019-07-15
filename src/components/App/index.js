import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../home';
import Problem from '../problem';
import Login from '../login';
import Header from '../header';
import { loadUser } from '../../redux/action-creators/login';
import { connect } from 'react-redux';

function App({ isAuthenticated, loadUser }) {
  loadUser();
  console.log('App token: ' + localStorage.getItem('token'));
  console.log('auth? ' + isAuthenticated.toString());
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/:problemId' component={Problem} />
          {/* <Route path='*' component={Login} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
// export default App;
