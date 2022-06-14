import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';

import { AUTH_USER } from './actions/action-types';

const store = configureStore();
const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));

if (user && token) {
    store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
    <Provider store={store}>{routes}</Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./routes', () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        const nextRoutes = require('./routes').default;
        ReactDOM.render(
            <Provider store={store}>{nextRoutes}</Provider>,
            document.getElementById('root'),
        );
    });
}
