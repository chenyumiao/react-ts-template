import * as React from 'react';
import * as ReactDOM from 'react-dom';

import routes from './route';
import { Provider } from 'react-redux';
import {store} from './store/store';

import './static/base.scss';


console.log(process.env);
ReactDOM.render(
  <Provider store={store}>
      {routes}
  </Provider>,
  document.getElementById('root') as HTMLElement
);
