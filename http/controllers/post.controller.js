'use strict';

import { responseService } from '../../services/response.service';

class PostController {

	getPosts(req, res, next) {
		let pool = req.app.get('postRepository');
		pool.getPosts()
			.then((result) => {
				responseService.json(res, 200, true, result, 'Get posts success');
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
    }

    addPost(req, res, next) {
        let data = req.body;
		let pool = req.app.get('postRepository');
		pool.addPost(data)
			.then(async (result) => {
                let post = await pool.getPostDetail(result[0]);
				responseService.json(res, 200, true, post[0], 'Add post success');
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
	}

	getPostDetail(req, res, next) {
        let id = req.params.id;
		let pool = req.app.get('postRepository');
        pool.getPostDetail(id)
			.then((result) => {
				responseService.json(res, 200, true, result[0], 'Get post detail success');
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
	}

	deletePost(req, res, next) {
		let id = req.params.id;
		let pool = req.app.get('postRepository');
		pool.deletePost(id)
			.then((result) => {
				responseService.json(res, 200, true, result, 'Delete posts success');
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
	}

}

module.exports = new PostController;
