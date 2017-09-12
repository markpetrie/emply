
import request from 'superagent';

const API_URL = '/api/expenses';

export default {
    getAll() {
        return request.get(API_URL)
            .then(
            r => r.body,
            ({ response }) => {
                const { body, text } = response;
                const error = body ? body.message || body.error || body : text;
                throw error;
            }
            );
    },

    get(id) {
        return request.get(`${API_URL}/${id}`)
            .then(
            r => r.body,
            ({ response }) => {
                const { body, text } = response;
                const error = body ? body.message || body.error || body : text;
                throw error;
            }
            );
    },

    add(expense) {
        return request.post(API_URL, expense)
            .then(
            r => r.body,
            ({ response }) => {
                const { body, text } = response;
                const error = body ? body.message || body.error || body : text;
                throw error;
            }
            );
    },

    update(expense) {
        return request.put(`${API_URL}/${expense._id}`, expense)
            .then(
            r => r.body,
            ({ response }) => {
                const { body, text } = response;
                const error = body ? body.message || body.error || body : text;
                throw error;
            }
            );
    },

    delete(expense) {
        return request.delete(`${API_URL}/${expense._id}`)
            .then(
            r => r.body,
            ({ response }) => {
                const { body, text } = response;
                const error = body ? body.message || body.error || body : text;
                throw error;
            }
            );
    }

};