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
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import MiniDrawer from './views/Main'
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Page3 from './views/Page3';
import Page4 from './views/Page4';
import Page5 from './views/Page5';
import Page6 from './views/Page6';


function App() {
  return (
    <>
      <Router>
        <MiniDrawer/>
        <Switch>
          <Route path='/commath-project/page2' component={Page2} />
          <Route path='/commath-project/page3' component={Page3} />
          <Route path='/commath-project/page4' component={Page4} />
          <Route path='/commath-project/page5' component={Page5} />
          <Route path='/commath-project/page6' component={Page6} />
          <Route path='/commath-project/page1' component={Page1} />
          <Route path='/commath-project'><Redirect to="/commath-project/page1" /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
