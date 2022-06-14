import * as types from '../actions/action-types';

const todoReducer = (state = {}, action) => {
    switch(action.type) {
        case types.FETCH_TODOS:
            return { list: action.payload, ...state };
        case types.FETCH_TODO_DETAIL:
            return { todoItem: action.payload, ...state };
        default:
            return state;
    }
}

export default todoReducer;
