
import * as actions from './expenses.constants';

export function expenses(state = [], action) {
    switch (action.type) {
        case actions.FETCHED_EXPENSES:
            return action.payload;
        case actions.CREATED_EXPENSE:
            return [...state, action.payload];
        case actions.DESTROYED_EXPENSE: {
            const index = state.findIndex(a => a === action.payload);
            if (index === -1) return state;
            return [...state.slice(0, index), ...state.slice(index + 1)];
        }
        default:
            return state;
    }
}

export function expensesError(state = null, action) {
    switch (action.type) {
        case actions.FETCHED_EXPENSES_ERROR:
        case actions.CREATED_EXPENSE_ERROR:
        case actions.FETCHED_EXPENSE_ERROR:
        case actions.DESTROYED_EXPENSE_ERROR:
        case actions.UPDATED_EXPENSE_ERROR:
            return action.payload;
        case actions.FETCH_EXPENSES:
        case actions.FETCHED_EXPENSES:
        case actions.FETCH_EXPENSE:
        case actions.FETCHED_EXPENSE:
        case actions.CREATE_EXPENSE:
        case actions.CREATED_EXPENSE:
        case actions.DESTROY_EXPENSE:
        case actions.DESTROYED_EXPENSE:
        case actions.UPDATE_EXPENSE:
        case actions.UPDATED_EXPENSE:
            return null;
        default:
            return state;
    }
}

export function expensesLoading(state = false, action) {
    switch (action.type) {
        case actions.FETCH_EXPENSES:
        case actions.CREATE_EXPENSE:
        case actions.UPDATE_EXPENSE:
            return true;
        case actions.FETCHED_EXPENSES:
        case actions.CREATED_EXPENSE:
        case actions.DESTROYED_EXPENSE:
        case actions.FETCHED_EXPENSE:
        case actions.CREATED_EXPENSE_ERROR:
        case actions.DESTROYED_EXPENSE_ERROR:
        case actions.FETCHED_EXPENSES_ERROR:
        case actions.FETCHED_EXPENSE_ERROR:
        case actions.UPDATED_EXPENSE:
        case actions.UPDATED_EXPENSE_ERROR:
            return false;
        default:
            return state;
    }
}