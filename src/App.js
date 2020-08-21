import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/login' exact component={} />
          <Route path='/checkout' exact component={} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
