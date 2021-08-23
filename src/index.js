'use strict'

import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/_misc/fonts.scss';
import './styles/index.scss';

// Main component
import './i18n';
import App from './components/App';

import { baseUrl } from 'utils/urls';

ReactDOM.render(
  <>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
)
