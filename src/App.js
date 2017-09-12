import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CategoriesContainer from './store/CategoriesContainer';
import ExpensesContainer from './store/ExpensesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Budget Tracker</h2>
        </div>
        <CategoriesContainer/>
        <ExpensesContainer/>
      </div>
    );
  }
}

export default App;
