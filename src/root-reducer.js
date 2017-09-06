
import { combineReducers } from 'redux';
import { categories, categoriesError, categoriesLoading } from './store/categories.reducers';

export default combineReducers({
    categories: categories,
    categoriesError: categoriesError,
    categoriesLoading: categoriesLoading
});