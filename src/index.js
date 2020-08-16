import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/home/App';
import Create from './pages/create/Create';
import NotFound from './pages/404/404';
import Chocolate from './pages/chocolate/Chocolate';
import Login from './pages/login/Login';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact="true" component={App} />
        <Route path="/create" exact="true" component={Create} />
        <Route path="/chocolate" exact="true" component={Chocolate} />
        <Route path="/login" exact="true" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
