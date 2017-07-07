import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Main from '.././containers/Main';
import Home from '.././containers/Home';
import '../../public/assets/styles/main.scss';

const Routes = () => (
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route exact path="/" component={Home} />
    </Route>
  </Router>
);

export default Routes;
