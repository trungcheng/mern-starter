'use strict';

import { responseService } from '../../services/response.service';

class CategoryController {

	getCategories(req, res, next) {
		let pool = req.app.get('categoryRepository');
		pool.getCategories()
			.then((result) => {
				responseService.json(res, 200, true, result, 'Get categories success');
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
	}

}

module.exports = new CategoryController;
