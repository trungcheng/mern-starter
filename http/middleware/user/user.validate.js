'use strict';

import { responseService } from '../../../services/response.service';

const UserValidate = (req, res, next) => {

	let data = req.body;
	req.app.get('userRepository')
		.countEmail(data.email)
		.then(result => {
			if (result == 0) return next();
			responseService.json(res, 400, false, [], 'Email already exist');
		})
		.catch((error) => {
			responseService.json(res, 400, false, [], error);
		});

};

module.exports = UserValidate;
