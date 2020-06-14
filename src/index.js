'use strict'

import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';

// Fonts, styles
import './img/works/snake.jpg';
import './img/logo.png';
import './styles/_misc/fonts.scss';
import './styles/index.scss';

// Main component
import App from './components/App';


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
