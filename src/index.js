import React from 'react';
import ReactDOM from 'react-dom';

import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';

import { Provider } from 'react-redux'
import './index.css';
import reducers from './store/reducers.js'
import App from './App';//导入App组件
import Auth from './containers/Auth/index.js';//登录页面
import NotFound from './containers/404.js'//notfound
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension():f => f
    ))


ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <Switch>

                 <Route path="/login" component={Auth}></Route>
                 <Route path="/App" component={App}></Route>
                 <Redirect to="/App"></Redirect>

                </Switch>
            </Router>
        </Provider>
    ),
    document.getElementById('root'));



registerServiceWorker();
