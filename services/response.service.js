'use strict';

export const responseService = {
  	json: (res, statusCode, status, data, message) => {
    	res.status(statusCode).json({
      		status: status,
      		data: data,
      		message: message
    	});
  	}
};
