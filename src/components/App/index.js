import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../home';
import Userdetails from '../userdetails';
import Login from '../login';
import Header from '../header';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/:problemId' component={Userdetails} />
          {/* <Route path='*' component={Login} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
