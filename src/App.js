import React, { Component } from 'react';
import MainContainer from './main/MainContainer';
import './App.css';
import { checkForToken } from './auth/actions';
import { connect } from 'react-redux';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from 'react-router-dom'
import CategoriesContainer from './store/CategoriesContainer';
import ExpensesContainer from './store/ExpensesContainer';
import Navigation from './store/Navigation';

class App extends Component {
  // componentDidMount() {
  //   this.props.checkForToken();
  // }

  render() {

    return (      
        <div className="App">
          <Navigation/>
          <CategoriesContainer />
          <ExpensesContainer />
          {/* <mainContainer/> */}
         
        </div>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user }),
  dispatch => ({
    checkForToken() { return dispatch(checkForToken()); }
  })
)(App);
