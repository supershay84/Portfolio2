import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <CssBaseline/>
    <Router>
    <Route exact path={"/"} component={Home}/>
    <Route path={"/resume"} component={Resume}/>
    <Route path={"/projects"} component={Projects}/>
    <Route path={"/contact"} component={Contact}/>
    </Router>
    </>
  );
}

export default App;
