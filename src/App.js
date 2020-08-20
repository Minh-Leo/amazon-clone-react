import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Header from './components/Header';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact component={} />
          <Route path='/' exact component={} />
          <Route path='/' exact component={} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
