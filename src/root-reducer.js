
import { combineReducers } from 'redux';
import { categories, categoriesError, categoriesLoading } from './store/categories.reducers';
import { expenses, expensesError, expensesLoading } from './store/expenses.reducers';

export default combineReducers({
    categories: categories,
    categoriesError: categoriesError,
    categoriesLoading: categoriesLoading,
    expenses: expenses,
    expensesError: expensesError,
    expensesLoading: expensesLoading
});