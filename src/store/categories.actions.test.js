
import { makeGetCategories, makeAddCategory, makeUpdateCategory, makeDestroyCategory } from './categories.actions';
import { FETCH_CATEGORIES, FETCHED_CATEGORIES, FETCHED_CATEGORIES_ERROR } from './categories.constants';
import { CREATE_CATEGORY, CREATED_CATEGORY, CREATED_CATEGORY_ERROR } from './categories.constants';
import { UPDATE_CATEGORY, UPDATED_CATEGORY, UPDATED_CATEGORY_ERROR } from './categories.constants';

describe('getCategories', () => {

    it('successfully gets categories', () => {
        const categories = ['category1'];
        const api = { getAll: () => Promise.resolve(categories) };
        const dispatched = [];
        const dispatch = (action) => dispatched.push(action);

        const getCategories = makeGetCategories(api);
        return getCategories()(dispatch)
            .then(() => {
                expect(dispatched).toEqual([
                    { type: FETCH_CATEGORIES },
                    { type: FETCHED_CATEGORIES, payload: categories }
                ]);
            });
    });

    it('failed get categories', () => {
        const error = 'FETCHED_CATEGORIES_ERROR';
        const api = { getAll: () => Promise.reject(error) };
        const dispatched = [];
        const dispatch = (action) => dispatched.push(action);

        const getCategories = makeGetCategories(api);
        return getCategories()(dispatch)
            .then(() => {
                expect(dispatched).toEqual([
                    { type: FETCH_CATEGORIES },
                    { type: FETCHED_CATEGORIES_ERROR, payload: error }
                ]);
            });
    });
})

describe('addCategory', () => {

    it('successfully adds category', () => {
        const category = { name: 'HR' };
        const api = { add: category => Promise.resolve(category) };
        const dispatched = [];
        const dispatch = (action) => dispatched.push(action);

        const addCategory = makeAddCategory(api);
        return addCategory(category)(dispatch)
            .then(() => {
                expect(dispatched).toEqual([
                    { type: CREATE_CATEGORY },
                    { type: CREATED_CATEGORY, payload: category }
                ]);
            });
    });
})

describe('updateCategory', () => {

    it('successfully updates category', () => {
        const category = { name: 'Test', _id: '59b08f3b23d915147077cf1f', amount: 500, department: 'Marketing' };
        const api = { put: category => Promise.resolve(category) };
        const dispatched = [];
        const dispatch = (action) => dispatched.push(action);

        const updateCategory = makeUpdateCategory(api);
        return updateCategory(category)(dispatch)
            .then(() => {
                expect(dispatched).toEqual([
                    { type: UPDATE_CATEGORY },
                    { type: UPDATED_CATEGORY, payload: category }
                ]);
            });
    });
})

it('fails adding category', () => {
    const error = 'the error';
    const api = { add: () => Promise.reject(error) };
    const dispatched = [];
    const dispatch = (action) => dispatched.push(action);

    const addCategory = makeAddCategory(api);
    return addCategory()(dispatch)
        .then(() => {
            expect(dispatched).toEqual([
                { type: CREATE_CATEGORY },
                { type: CREATED_CATEGORY_ERROR, payload: 'the error' }
            ]);
        });
});