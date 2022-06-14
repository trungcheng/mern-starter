'use strict';

import jwt from 'jsonwebtoken';
import { responseService } from '../../../services/response.service';

module.exports = (req, res, next) => {
	const token = req.body.token || req.query.token || req.headers['x-access-token'];

	if (token) {
		jwt.verify(token, 'trungcheng', function(err, decoded) {
			if (err) {
				responseService.json(res, 401, false, {}, err);
			} else {
				req.user = decoded._doc;
				next();
			}
		});
	} else {
		responseService.json(res, 401, false, {}, 'No token provided');
	}

};