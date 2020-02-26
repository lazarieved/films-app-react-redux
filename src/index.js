import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message, Alert } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import App from './components/App';
// import {Provider} from 'react-redux';
// import {store} from './store/configureStore'

ReactDOM.render(
// <Provider store={store}>
//   {console.log(store)}
  <App/>,
  // </Provider>,
document.getElementById('root')
);
