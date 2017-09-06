
import * as actions from './categories.constants';
import api from '../api/categoriesApi';


export function makeGetCategories(api) {
    return function () {
        return function (dispatch) {
            dispatch({ type: actions.FETCH_CATEGORIES });

            return api.getAll()
                .then(
                categories => {
                    dispatch({ type: actions.FETCHED_CATEGORIES, payload: categories });
                },
                error => {
                    dispatch({ type: actions.FETCHED_CATEGORIES_ERROR, payload: error.error });
                }
                );
        };
    };
}

export const getCategories = makeGetCategories(api);


export const makeGetCategory = api => category => dispatch => {

    dispatch({ type: actions.FETCH_CATEGORY});

    return api.get(category)
        .then(
            category => {
                dispatch({ type: actions.FETCHED_CATEGORY, payload: category });
            },
            error => {
                dispatch({ type: actions.FETCHED_CATEGORY_ERROR, payload: error.error });
            }
        );
}

export const getCategory = makeGetCategory(api);


export const makeAddCategory = api => category => dispatch => {

    dispatch({ type: actions.CREATE_CATEGORY });

    return api.add(category)
        .then(
        saved => {
            dispatch({ type: actions.CREATED_CATEGORY, payload: saved });
        },
        err => {
            dispatch({ type: actions.CREATED_CATEGORY_ERROR, payload: err });
        }
        );
}

export const addCategory = makeAddCategory(api);


export const makeUpdateCategory = api => category => dispatch => {

    dispatch({ type: actions.UPDATE_CATEGORY });

    return api.put(category)
        .then(
            saved => {
                dispatch({ type: actions.UPDATED_CATEGORY, payload: saved });
            },
            err => {
                dispatch({ type: actions.UPDATED_CATEGORY_ERROR, payload: err });
        }
    );
}

export const updateCategory = makeUpdateCategory(api);


export const makeDestroyCategory = api => category => dispatch => {

    dispatch({ type: actions.DESTROY_CATEGORY });

    return api.delete(category)
        .then(
            success => {
                dispatch({ type: actions.DESTROYED_CATEGORY, payload: success });
            },
            err => {
                dispatch({ type: actions.UPDATED_CATEGORY_ERROR, payload: err });
            }
        );
};

export const destroyCategory = makeDestroyCategory(api);