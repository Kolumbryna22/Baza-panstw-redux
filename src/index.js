import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/index';
import DevTools from './DevTools';
import { getCountries } from './actions/actions-countries';
import routes from './routes';
import './country.css';

render(
    /*eslint no-unused-vars: "off"*/
    <Provider store={store}>
        <div>
            <Router history={hashHistory} routes={routes} />
            {/* <DevTools /> */}
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());
