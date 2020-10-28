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
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MiniDrawer from './views/Main'
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Page3 from './views/Page3';
import Page4 from './views/Page4';
import Page5 from './views/Page5';
import Page6 from './views/Page6';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import { Link } from 'react-router-dom';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import BarChartIcon from '@material-ui/icons/BarChart';
import BookIcon from '@material-ui/icons/Book';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
      setOpen(true);
  };

  const handleDrawerClose = () => {
      setOpen(false);
  };

  return (
    <>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Project Commath
          </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <div style={{ marginRight: "20x" }}>61114440472 ภัทรพล ผิวเรือง</div>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>


            </div>


            <Divider />
            <List>
              {['บทที่ 1 Basic Computing', 'บทที่ 2 Linear Equations', 'บทที่ 3 Interpolation', 'บทที่ 4 Differentiation', 'บทที่ 5 Integration', 'บทที่ 6 Root-finding'].map((text, index) => (
                <Link to={`page${index + 1}`} style={{ textDecoration: "none" }}>
                  <ListItem button key={text}>

                    <ListItemIcon>{index == 0 ? <AutorenewIcon /> :
                      index == 1 ? <AssignmentIcon /> :
                        index == 2 ? <AllInclusiveIcon /> :
                          index == 3 ? <BarChartIcon /> :
                            index == 4 ? <BookIcon /> :
                              index == 5 ? <BookmarksIcon /> :
                                index == 6 ? <ClearAllIcon /> : null}</ListItemIcon>
                    <ListItemText primary={text} style={{ color: "#000000" }} />

                  </ListItem>
                </Link>
              ))}
            </List>
            {/* <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List> */}
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route path='/commath-project/page2' component={Page2} />
              <Route path='/commath-project/page3' component={Page3} />
              <Route path='/commath-project/page4' component={Page4} />
              <Route path='/commath-project/page5' component={Page5} />
              <Route path='/commath-project/page6' component={Page6} />
              <Route path='/commath-project/page1' component={Page1} />
              <Route path='/commath-project'><Redirect to="/commath-project/page1" /></Route>
            </Switch>
          </main>
        </div>

      </Router>
    </>
  );
}

export default App;
