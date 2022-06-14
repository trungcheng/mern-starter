'use strict';

import { responseService } from '../../services/response.service';

class TodoController {

	getTodos(req, res, next) {
		let pool = req.app.get('todoRepository');
		pool.getTodos()
			.then((result) => {
				responseService.json(res, 200, true, result, 'Get todos success');
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
	}

	getTodoDetail(req, res, next) {
        let id = req.params.id;
		let pool = req.app.get('todoRepository');
        pool.getTodoDetail(id)
			.then((result) => {
				responseService.json(res, 200, true, result[0], 'Get todo detail success');
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
	}

	deleteTodo(req, res, next) {
		let id = req.params.id;
		let pool = req.app.get('todoRepository');
		pool.deleteTodo(id)
			.then((result) => {
				responseService.json(res, 200, true, result, 'Delete todos success');
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
	}

}

module.exports = new TodoController;
