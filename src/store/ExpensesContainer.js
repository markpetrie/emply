
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getExpenses, getExpense, addExpense, updateExpense, destroyExpense } from './expenses.actions';

import Expenses from './Expenses';

function mapStateToProps(state) {
    return {
        categories: state.categories,
        expenses: state.expenses,
        error: state.expensesError,
        loading: state.expensesLoading
    };
}

function mapDispatchToProps(dispatch) {
    dispatch(getExpenses());
    return bindActionCreators({ getExpense, addExpense, updateExpense, destroyExpense }, dispatch);
}

const ExpensesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Expenses);

export default ExpensesContainer;