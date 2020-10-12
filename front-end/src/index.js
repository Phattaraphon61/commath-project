import React from 'react';
import ReactDOM from 'react-dom';
import Page1 from './viws/Page1'
import Page2 from './viws/Page2'
import './index.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Basic from './myform'
class Game extends React.Component {
  render() {
    return (
      <BrowserRouter  basename={process.env.PUBLIC_URL}>
        <Switch>
         
          <Route path="/page2">
            <Page2 />
          </Route> 
          <Route path="/">
            <Page1 />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
