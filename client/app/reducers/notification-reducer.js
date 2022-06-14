import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  	message: '',
  	isOpen: false
}

const notificationReducer = (state = initialState, action) => {
  	switch (action.type) {
    	case types.SHOW_NOTIFICATION:
    		return { message: action.message, isOpen: true }; 
    	default: 
    		return getDefault(action); 
  	}
}

const getDefault = (action) => {
  	if (_.isUndefined(action.message)) {
     	return initialState;
  	}

  	return { message: action.message, isOpen: false };
}

export default notificationReducer;