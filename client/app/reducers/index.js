import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import authReducer from './auth-reducer';
import postReducer from './post-reducer';
import todoReducer from './todo-reducer';
import notificationReducer from './notification-reducer';

const rootReducer = combineReducers({
	form,
	auth: authReducer,
	post: postReducer,
	todo: todoReducer,
	notification: notificationReducer
});

export default rootReducer;
