import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './service/reducers/index'
// import ViewMore from './components/ViewMore';
import ViewMoreContainer from './containers/ViewMoreContainer';
// import Main from './Main';
const store=createStore(rootReducer)
// 

ReactDOM.render(
  <Provider store={store}>
     <Router>
     <Routes>
            <Route exact path="/" element={<App />}></Route>
            <Route exact path="/login" element={<ViewMoreContainer />}></Route>
            <Route exact path="/Sigup" element={<App />}></Route>
            <Route exact path="/application" element={<App />}></Route>
          </Routes>
          </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
