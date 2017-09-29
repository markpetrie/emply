import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import './App.css';
import CategoriesContainer from './store/CategoriesContainer';
import ExpensesContainer from './store/ExpensesContainer';
import Navigation from './store/Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Budget Tracker</h2>
          </div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={CategoriesContainer} />
            <Route path="/expenses" component={ExpensesContainer} />
            {/* <CategoriesContainer/>
        <ExpensesContainer/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
