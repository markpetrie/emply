import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ExpensesContainer from '../store/ExpensesContainer';
import CategoriesContainer from '../store/CategoriesContainer';
import Navigation from '../store/Navigation';

export default class Main extends Component {


    render() {

        // const { expenses } = this.props.user;
        return (
        
            <div>

                <Navigation />
                <CategoriesContainer />
                <ExpensesContainer />
                {/* <NavLink 
                    style={{
                        fontWeight: 'bold',
                        color: 'lightBlue',
                        border: '1px dashed gray',
                    }}
                    to="/">Expenses
                </NavLink>
                <h3 style={{color: '#B8C733'}}>Expenses</h3>

                <NavLink 
                    style={{
                        fontWeight: 'bold',
                        color: 'lightBlue',
                        border: '1px dashed gray',
                    }}
                    to="/categories">
                </NavLink>
                <h3 style={{color: '#B8C733'}}>Categories</h3>
                })} */}
                
            </div>
        );
    }
}

