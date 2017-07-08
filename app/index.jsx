import React from 'react';
import { render } from 'react-dom';
import Home from './containers/Home';
import '../public/assets/styles/main.scss';

render(
  <Home />,
  document.getElementById('app')
);
