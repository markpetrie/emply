
import request from 'superagent';

const API_URL = '/api/categories';

export default {
    getAll() {
        return request.get(API_URL)
            .then(
            r => r.body,
            e => { throw e.response.body; }
            );
    },

    get(id) {
        return request.get(`${API_URL}/${id}`)
            .then(
            r => r.body,
            e => { throw e.response.body; }
            );
    },

    add(category) {
        return request.post(API_URL, category)
            .then(
            r => r.body,
            e => { throw e.response.body }
            );
    },

    update(category) {
        return request.put(`${API_URL}/${id}`, category)
            .then(
            r => r.body,
            e => { throw e.response.body }
            );
    },

    delete(category) {
        return request.delete(`${API_URL}/${category._id}`)
            .then(
            r => r.body,
            e => { throw e.response.body }
            );
    }
}