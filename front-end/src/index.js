import React from 'react';
import ReactDOM from 'react-dom';
import Page1 from './viws/Page1'
import './index.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Basic from './myform'
class Game extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route path="/home">
            <Page1/>
        </Route>
        <Route path="/">
        <Redirect to="/home" />
      </Route>
      </Switch>
    </BrowserRouter>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game/>,
document.getElementById('root')
);
