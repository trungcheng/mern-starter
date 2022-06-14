import * as types from '../actions/action-types';

const authReducer = (state = {}, action) => {
    
    switch(action.type) {
        case types.SIGNUP_SUCCESS:
            return { ...state, signup: true, success: { signup: action.payload } };
        case types.SIGNUP_FAILURE:
            return { ...state, signup: false, error: { signup: action.payload } };
        case types.SIGNUP_RESEND_FAILURE:
            return { ...state, signup: true, error: { signupResend: action.payload } };
        case types.VERIFY_EMAIL_SUCCESS:
            return { ...state, signup: true, success: { verifyEmail: action.payload } };
        case types.VERIFY_EMAIL_FAILURE:
            return { ...state, signup: true, error: { verifyEmail: action.payload } };
        case types.SIGNIN_FAILURE:
            return { ...state, error: { signin: action.payload } };
        case types.AUTH_USER:
            return { ...state, authenticated: true, error: {} };
        case types.UNAUTH_USER:
            return { ...state, authenticated: false, error: {} };
        case types.RESET_PASSWORD_SUCCESS:
            return { ...state, resetPassword: true, success: { resetPassword: action.payload } };
        case types.RESET_PASSWORD_FAILURE:
            return { ...state, resetPassword: false, error: { resetPassword: action.payload } };
        case types.VERIFY_RESET_PASSWORD_SUCCESS:
            return { ...state, verifyResetPassword: true, success: { verifyResetPassword: action.payload }, resetPassword: false };
        case types.VERIFY_RESET_PASSWORD_FAILURE:
            return { ...state, verifyResetPassword: false, error: { verifyResetPassword: action.payload } };
        default:
            return state;
    }
}

export default authReducer;