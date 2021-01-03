import React, { useState } from 'react';
import classes from './App.module.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Index from './components/Index/Index';
import NewSchedule from './components/NewSchedule/NewSchedule';

const App = () => {
  const [userCards, setUserCards] = useState([
    { id: 1, text: 'Candy Cane Pop' },
    { id: 2, text: 'Chestnut Jazz' },
  ]);

  return (
    <Router>
      <div className='App'>
        <Layout>
          <Switch>
            <Route
              exact
              path='/new-schedule'
              render={(props) => (
                <NewSchedule {...props} userCards={userCards} />
              )}
            />

            <Route exact path='/' component={Index} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
