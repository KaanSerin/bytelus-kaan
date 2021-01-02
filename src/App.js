import React from 'react';
import classes from './App.module.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Index from './components/Index/Index';
import NewSchedule from './components/NewSchedule/NewSchedule';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Layout>
          <Switch>
            <Route path='/new-schedule' component={NewSchedule} />
            <Route path='/' component={Index} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
