import React from 'react';
import ReactDOM from 'react-dom';
import Page1 from './viws/Page1'
import Page2 from './viws/Page2'
import './index.css';
import { BrowserRouter, Switch, Route, Redirect, useRoutes } from 'react-router-dom';
import Basic from './myform'
import routes from './routes'
const App = () =>{
const router = useRoutes(routes)
return <di>{router}</di>
}
export default App;

// ========================================

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);
