import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppRoutes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

ReactDOM.render(
 <Provider store={store}>
   <AppRoutes />
 </Provider>,
 document.getElementById('root')
);
registerServiceWorker();

