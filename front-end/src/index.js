import React from 'react';
import ReactDOM from 'react-dom';
import Page1 from './viws/Page1'
import Page2 from './viws/Page2'
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Basic from './myform'
class Game extends React.Component {
  render() {
    return (
      
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Page1 />
          </Route>
          <Route path="/users">
            <Page2 />
          </Route>
          <Route path="/">
            <Page2 />
          </Route>
        </Switch>
      </div>
    </Router>

    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
