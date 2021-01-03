import React, { useState } from 'react';
import classes from './App.module.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Index from './components/Index/Index';
import NewSchedule from './components/NewSchedule/NewSchedule';
import NewCard from './components/NewCard/NewCard';

const App = () => {
  const [userCards, setUserCards] = useState([
    {
      id: 1,
      text: 'Candy Cane Pop',
      description: 'Some activity',
      color: '#cf1',
    },
    {
      id: 2,
      text: 'Chestnut Jazz',
      description: 'Some activity 2',
      color: '#cf1',
    },
  ]);

  const addNewCard = (name, description) => {
    setUserCards([
      ...userCards,
      {
        id: parseInt(Math.random() * 1000),
        text: name,
        description,
      },
    ]);
  };

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

            <Route
              exact
              path='/new-card'
              render={(props) => (
                <NewCard
                  {...props}
                  userCards={userCards}
                  onAddCard={addNewCard}
                />
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
