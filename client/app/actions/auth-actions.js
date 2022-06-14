import * as types from './action-types';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { API_URL } from '../constants';
import * as notification from './notification-actions';

/**
 * Error helper
 */
export function actionError(CONST, error) {
    return {
        type: CONST,
        payload: error,
    }
}

export function actionSuccess(CONST, success) {
    return {
        type: CONST,
        payload: success,
    }
}

/**
 * Sign up
 */
export function signupUser(props) {
    const { username, email, password } = props;

    return (dispatch) => {
        notification.show('Processing... Please wait!')(dispatch);
        
        axios.post(`${API_URL}/signup`, { username, email, password })
        .then((response) => {
            if (response.data.status) {
                dispatch(actionSuccess(types.SIGNUP_SUCCESS, response.data.message));
                browserHistory.push(`/auth/signup/verify-email?email=${props.email}`);
            }
        })
        .catch((error) => {
            dispatch(actionError(types.SIGNUP_FAILURE, error.response.data.message));
        });
    }
}

/**
 * Sign in
 */
export function signinUser(props) {
    return (dispatch) => {
        notification.show('Processing... Please wait!')(dispatch);

        axios.post(`${API_URL}/signin`, props)
            .then(response => {
                if (response.data.status) {
                    localStorage.setItem('user', JSON.stringify(response.data.data.data));
                    localStorage.setItem('token', JSON.stringify(response.data.data.token));
                    dispatch(actionSuccess(types.AUTH_USER, response.data.message));
                    browserHistory.push('/dashboard');
                }
            })
            .catch((error) => {
                dispatch(actionError(types.SIGNIN_FAILURE, error.response.data.message));
            });
    }
}

/**
 * Verify email
 */
export function verifyEmail(props) {
    return (dispatch) => {
        axios.post(`${API_URL}/signup/verify-email`, props)
        .then(response => {
        	if (response.data.status) {
                dispatch(actionSuccess(types.VERIFY_EMAIL_SUCCESS, response.data.message));
	            browserHistory.push('/auth/signin');
	        }
        })
        .catch((error) => {
            dispatch(actionError(types.VERIFY_EMAIL_FAILURE, error.response.data.message));
        });
    }
}

/**
 * Resend verification code
 */
export function resendVerification(props) {
    return (dispatch) => {
        axios.post(`${API_URL}/resend-verify-code`, props)
        .then(() => {
            dispatch({ type: types.SIGNUP_SUCCESS });
        })
        .catch((error) => {
            dispatch(actionError(types.SIGNUP_RESEND_FAILURE, error.response.data.message));
        });
    }
}

/**
 * Sign out
 */
export function signoutUser() {
    localStorage.clear();

    return {
        type: types.UNAUTH_USER
    }
}

/**
 * Reset password
 */
export function resetPassword(props) {
    return (dispatch) => {
        axios.post(`${API_URL}/reset-password`, props)
        .then((response) => {
        	if (response.data.status) {
            	dispatch({ type: types.RESET_PASSWORD_SUCCESS });
            	browserHistory.push(`/auth/reset-password/verify?email=${props.email}`);
        	}
        })
        .catch((error) => {
            dispatch(actionError(types.RESET_PASSWORD_FAILURE, error.response.data.message));
        });
    }
}

/**
 * Verify Reset password
 */
export function verifyResetPassword(props) {
    return (dispatch) => {
        axios.post(`${API_URL}/reset-password/verify`, props)
        .then((response) => {
        	if (response.data.status) {
            	dispatch(actionSuccess(types.VERIFY_RESET_PASSWORD_SUCCESS, response.data.message));
        	}
        })
        .catch((error) => {
            dispatch(actionError(types.VERIFY_RESET_PASSWORD_FAILURE, error.response.data));
        });
    }
}

/**
 * Reset password new
 */
export function resetPasswordNew(props) {
    return (dispatch) => {
        axios.post(`${API_URL}/reset-password/new`, props)
        .then(response => {
        	if (response.data.status) {
                dispatch(actionSuccess(types.RESET_PASSWORD_SUCCESS, response.data.message));
            	browserHistory.push('/auth/signin');
        	}
        })
        .catch((error) => { 
            dispatch(actionError(types.VERIFY_RESET_PASSWORD_FAILURE, error.response.data));
        });
    }
}