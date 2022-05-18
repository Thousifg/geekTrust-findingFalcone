import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './Routers/Routers'
import * as serviceWorker from './serviceWorker';
import configureStore from "./redux/configureStore";
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <Routers />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
