import React from 'react';
import classes from './App.module.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Layout>Hello World</Layout>
      </div>
    </Router>
  );
};

export default App;
