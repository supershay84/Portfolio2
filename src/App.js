import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components';
import Resume from './components/Resume';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <>
    <CssBaseline/>
    <Router>
    <Switch>
    <Route exact path={"/"} component={Home}/>
    <Route path={"/resume"} component={Resume}/>
    <Route path={"/projects"} component={Projects}/>
    <Route path={"/about"} component={About}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
