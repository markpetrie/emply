
import * as actions from './categories.constants';

export function categories(state = [], action) {
    switch (action.type) {
        case actions.FETCHED_CATEGORIES:
            return action.payload;
        case actions.CREATED_CATEGORY:
            return [...state, action.payload];
            // do we need to add case for updated?
        case actions.DESTROYED_CATEGORY: {
            const index = state.findIndex(a => a === action.payload);
            if(index === -1) return state;
            return [...state.slice(0, index), ...state.slice(index + 1)];
        }
        default:
            return state;
    }
}

export function categoriesError(state = null, action) {
    switch(action.type) {
        case actions.FETCHED_CATEGORIES_ERROR:
        case actions.CREATED_CATEGORY_ERROR:
        case actions.FETCHED_CATEGORY_ERROR:
        case actions.DESTROYED_CATEGORY_ERROR:
        case actions.UPDATED_CATEGORY_ERROR:
            return action.payload;
        case actions.FETCH_CATEGORIES:
        case actions.FETCHED_CATEGORIES:
        case actions.FETCH_CATEGORY:
        case actions.FETCHED_CATEGORY:
        case actions.CREATE_CATEGORY:
        case actions.CREATED_CATEGORY:
        case actions.DESTROY_CATEGORY:
        case actions.DESTROYED_CATEGORY:
        case actions.UPDATE_CATEGORY:
        case actions.UPDATED_CATEGORY:
            return null;
        default:
            return state;
    }
}

export function categoriesLoading(state = false, action) {
    switch(action.type) {
        case actions.FETCH_CATEGORIES:
        case actions.CREATE_CATEGORY:
        case actions.UPDATE_CATEGORY:
            return true;
        case actions.FETCHED_CATEGORIES:
        case actions.CREATED_CATEGORY:
        case actions.DESTROYED_CATEGORY:
        case actions.FETCHED_CATEGORY:
        case actions.CREATED_CATEGORY_ERROR:
        case actions.DESTROYED_CATEGORY_ERROR:
        case actions.FETCHED_CATEGORIES_ERROR:
        case actions.FETCHED_CATEGORY_ERROR:
        case actions.UPDATED_CATEGORY:
        case actions.UPDATED_CATEGORY_ERROR:
            return false;
        default:
            return state;
    }
}