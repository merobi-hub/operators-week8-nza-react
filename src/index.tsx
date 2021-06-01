import React from 'react';
import ReactDOM from 'react-dom';
import { Home, What, Where } from './components';
import reportWebVitals from './reportWebVitals';
import './styles.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home title='NZA Law'/>
        </Route>
        <Route path='/what' component={What} />
        <Route path='/where' component={Where} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
