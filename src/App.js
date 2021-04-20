import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Navigation from './components/navigation/Navigation';

import Homepage from './pages/homepage/Homepage';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Project from './pages/project/Project';
import CV from './pages/cv/CV';
import ScrollToTop from './components/utils/ScrollToTop';

AOS.init();

export default () => (
  <div className="app">
    <Router>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/project/:projectId" component={Project} />
        <Route path="/cv" component={CV} />
        <Route exact path="/" component={Homepage} />
        {/* <Route component={404} /> */}
      </Switch>
    </Router>
  </div>
);
