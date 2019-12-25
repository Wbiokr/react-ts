import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './stylus/APP.styl';
import * as serviceWorker from './serviceWorker';

import Index from './views/app';
import Login from './views/login';

import store from './redux/index';

const App = !!sessionStorage.token ? Index : Login;

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Index />
    </Provider>,
    document.querySelector('#root')
  )
};

render();

const unsubscribe = store.subscribe(()=>render());

unsubscribe();

serviceWorker.unregister();
