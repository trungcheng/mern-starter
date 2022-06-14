'use strict';

import responseService from '../../../services/response.service';

module.exports = function (req, res, next) {
	req.data = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	};

	if (!req.data.username) {
		responseService.json(res, 400, false, [], 'Username is required');
	}
	if (!req.data.email) {
		responseService.json(res, 400, false, [], 'Email is required');
	}
	if (!req.data.password) {
		responseService.json(res, 400, false, [], 'Password is required');
	}
	
	return next();
};