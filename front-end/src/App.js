// import React from 'react';
// import './App.css';
// import routes from "./routes";
// import { useRoutes } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


// const App = () => {
//   const router = useRoutes(routes);
//   return <div>{router}</div>;
// };

// export default App;

import React from 'react';
import './App.css';
import Navbar from './views/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page1 from './views/Number1';
import Page2 from './views/Number2';
import Page3 from './views/Number3';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Page1} />
          <Route path='/reports' component={Page2} />
          <Route path='/products' component={Page3} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
