import * as types from '../actions/action-types';

const postReducer = (state = {}, action) => {
    switch(action.type) {
        case types.FETCH_POSTS:
            return { list: action.payload, ...state };
        case types.FETCH_POST_DETAIL:
            return { ...state.post, post: action.payload }
        case types.FETCH_CATE:
            return {
                categories: action.payload,
                initialValues: {
                    cat_id: action.payload[0].id,
                    user_id: JSON.parse(localStorage.getItem('user')).id
                },
                ...state
            };
        case types.ADD_POST:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        default:
            return state;
    }
}

export default postReducer;
