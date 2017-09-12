
import * as actions from './expenses.constants';
import api from '../api/expenses';

export function makeGetExpenses(api) {
    return function () {
        return function (dispatch) {
            dispatch({ type: actions.FETCH_EXPENSES });

            return api.getAll()
                .then(
                expenses => {
                    dispatch({ type: actions.FETCHED_EXPENSES, payload: expenses });
                },
                error => {
                    dispatch({ type: actions.FETCHED_EXPENSES_ERROR, payload: error });
                }
                );
        };
    };
}

    export const getExpenses = makeGetExpenses(api);


    export const makeGetExpense = api => expense => dispatch => {

        dispatch({ type: actions.FETCH_EXPENSE });

        return api.get(expense)
            .then(
            expense => {
                dispatch({ type: actions.FETCHED_EXPENSE, payload: expense });
            },
            error => {
                dispatch({ type: actions.FETCHED_EXPENSE_ERROR, payload: error });
            }
            );
    }

    export const getExpense = makeGetExpense(api);


    export const makeAddExpense = api => expense => dispatch => {

        dispatch({ type: actions.CREATE_EXPENSE });

        return api.add(expense)
            .then(
            saved => {
                dispatch({ type: actions.CREATED_EXPENSE, payload: saved });
            },
            error => {
                dispatch({ type: actions.CREATED_EXPENSE_ERROR, payload: error });
            }
            );
    }

    export const addExpense = makeAddExpense(api);


    export const makeUpdateExpense = api => expense => dispatch => {

        dispatch({ type: actions.UPDATE_EXPENSE });

        return api.put(expense)
            .then(
            saved => {
                dispatch({ type: actions.UPDATED_EXPENSE, payload: saved });
            },
            error => {
                dispatch({ typed: actions.UPDATED_EXPENSE_ERROR, payload: error });
            }
            );
    }
    
    export const updateExpense = makeUpdateExpense(api);


    export const makeDestroyExpense = api => expense => dispatch => {

        dispatch({ type: actions.DESTROY_EXPENSE });

        return api.delete(expense)
            .then(
            success => {
                dispatch({ type: actions.DESTROYED_EXPENSE, payload: success });
            },
            error => {
                dispatch({ type: actions.UPDATED_EXPENSE_ERROR, payload: error });
            }
            );
    }

    export const destroyExpense = makeDestroyExpense(api);