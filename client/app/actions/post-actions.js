import * as types from './action-types';
import axios from 'axios';
import { API_URL } from '../constants';
import { browserHistory } from 'react-router';

/**
 * Fetch all posts
 */
export function fetchPosts() {
    return function (dispatch) {
        axios.get(`${API_URL}/posts`)
        .then(response => {
            dispatch({
                type: types.FETCH_POSTS,
                payload: response.data.data
            });
        });
    }
}

/**
 * Get post detail
 */
 export function fetchDetail(postId) {
    return function (dispatch) {
        axios.get(`${API_URL}/posts/${postId}`)
        .then(response => {
            dispatch({
                type: types.FETCH_POST_DETAIL,
                payload: response.data.data
            });
        });
    }
}

/**
 * Add new post
 */
export function addPost(props) {
    return function (dispatch) {
        axios.post(`${API_URL}/posts`, props)
        .then(response => {
            dispatch({
                type: types.ADD_POST,
                payload: response.data.data
            });
            browserHistory.push('/posts');
        })
    }
}

/**
 * Fetch category
 */
export function fetchCate() {
    return function (dispatch) {
        axios.get(`${API_URL}/categories`)
        .then(response => {
            dispatch({
                type: types.FETCH_CATE,
                payload: response.data.data
            });
        })
    }
}
