import * as types from './action-types';

export function show(message) {
  	return (dispatch) => {
    	dispatch({
      		type: types.SHOW_NOTIFICATION,
      		message: message,
      		isOpen: true
    	});
  	}
}