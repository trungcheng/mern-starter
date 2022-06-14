'use strict';

import { responseService } from '../../services/response.service';

class UserController {

	getUsers(req, res, next) {
		let pool = req.app.get('userRepository');
		pool.getUsers()
			.then((result) => {
				responseService.json(res, 200, true, result, 'Get users success');
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
	}

	deleteUser(req, res, next) {
		let id = req.params.id;
		let pool = req.app.get('userRepository');
		pool.deleteUser(id)
			.then((result) => {
				responseService.json(res, 200, true, result, 'Delete users success');
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
	}

}

module.exports = new UserController;
