
import { combineReducers } from 'redux';
import auth from './auth/reducers';
import { categories, categoriesError, categoriesLoading } from './store/categories.reducers';
import { expenses, expensesError, expensesLoading } from './store/expenses.reducers';

export default combineReducers({
    auth: auth,
    categories: categories,
    categoriesError: categoriesError,
    categoriesLoading: categoriesLoading,
    expenses: expenses,
    expensesError: expensesError,
    expensesLoading: expensesLoading
});