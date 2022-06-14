import * as types from './action-types';
import axios from 'axios';
import { API_URL } from '../constants';

/**
 * Fetch all users
 */
export function fetchTodos() {
    return function (dispatch) {
        axios.get(`${API_URL}/todos`)
        .then(response => {
            dispatch({
                type: types.FETCH_TODOS,
                payload: response.data.data
            });
        });
    }
}

/**
 * Get user detail
 */
 export function fetchDetail(todoId) {
    return function (dispatch) {
        axios.get(`${API_URL}/todos/${todoId}`)
        .then(response => {
            dispatch({
                type: types.FETCH_TODO_DETAIL,
                payload: response.data.data
            });
        });
    }
}
