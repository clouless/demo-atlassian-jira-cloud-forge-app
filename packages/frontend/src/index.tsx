import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { invoke, view, router } from '@forge/bridge';

import '@atlaskit/css-reset';

ReactDOM.render(
  <React.StrictMode>
    <App invoke={invoke} view={view} routerOpen={router.open} />
  </React.StrictMode>,
  document.getElementById('root')
);
