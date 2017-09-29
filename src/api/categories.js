
import request from 'superagent';

const API_URL = '/api/categories';

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

    add(category) {
        return request.post(API_URL, category)
            .then(
            r => r.body,
            ({ response }) => {
                const { body, text } = response;
                const error = body ? body.message || body.error || body : text;
                throw error;
            }
            );
    },

    put(category) {
        return request.put(`${API_URL}/${category._id}`, category)
            .then(
            r => r.body,
            ({ response }) => {
                const { body, text } = response;
                const error = body ? body.message || body.error || body : text;
                throw error;
            }
            );
    },

    delete(category) {
        return request.delete(`${API_URL}/${category._id}`)
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