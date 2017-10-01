import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Auth from './auth/Auth';
import CategoriesContainer from './store/CategoriesContainer';
import ExpensesContainer from './store/ExpensesContainer';
import App from './App';
import Navigation from './store/Navigation';
import PrivateRoute from './privateRoute';
import { checkForToken } from './auth/actions';
import { connect } from 'react-redux';
import Main from './main/Main';

const Home = () => (
    <div>
        <h2
            style={{
                paddingRight: '10px',
                color: 'lightGrey'
            }}>Welcome to Expenses</h2>
    </div>
);

class TopBar extends Component {

    componentDidMount() {
        this.props.checkForToken();
    }

    render() {
        return (
            <Router>
                <div className="TopBar" >
                    <ul style={{ backgroundColor: '#525038', margin: '0', padding: '20px' }}>
                        <NavLink
                            style={{
                                paddingRight: '10px',
                                color: '#C8C2B7'
                            }}
                            activeStyle={{
                                fontWeight: 'bold',
                                color: '#9AAC39',
                                border: '1px solid gray',
                            }}
                            exact to="/">Home</NavLink>
                        <NavLink
                            style={{
                                paddingRight: '10px',
                                color: '#C8C2B7'
                            }}
                            activeStyle={{
                                fontWeight: 'bold',
                                color: '#9AAC39',
                                border: '1px solid gray',
                            }}
                            to="/expenses">Expenses</NavLink>
                         <NavLink
                            style={{
                                paddingRight: '10px',
                                color: '#C8C2B7'
                            }}
                            activeStyle={{
                                fontWeight: 'bold',
                                color: '#9AAC39',
                                border: '1px solid gray',
                            }}
                            to="/categories">Categories</NavLink>
                    </ul>
                    <hr />

                    <Switch>
                        <Route path="/auth" render={() => <Auth />} />
                        <PrivateRoute path="/home" render={() => <App />} />
                        <Route exact path="/" component={Home} />
                        <PrivateRoute path="/expenses" component={ExpensesContainer} />
                        <PrivateRoute path="/categories" component={CategoriesContainer} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        );
    }
}


export const TopBarContainer = connect(
    state => ({ user: state.auth.user }),
    dispatch => ({
        checkForToken() { return dispatch(checkForToken()); }
    })
)(TopBar);

export default TopBarContainer;