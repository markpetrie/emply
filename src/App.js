import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CategoriesContainer from './store/CategoriesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Budget Tracker</h2>
        </div>
        <CategoriesContainer/>
      </div>
    );
  }
}

export default App;
