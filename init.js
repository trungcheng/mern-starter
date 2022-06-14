'use strict';

import config from './knexfile';
import knex from 'knex';
import userRepository from './repositories/user.repository';
import postRepository from './repositories/post.repository';
import todoRepository from './repositories/todo.repository';
import categoryRepository from './repositories/category.repository';

let env = (process.env.NODE_ENV === 'production') ? 'production' : 'development';
let knexOrm = knex(config[env]);

export default (app, redisCache) => {
	app.set('redisCache', redisCache);
	app.set('userRepository', userRepository(knexOrm));
	app.set('postRepository', postRepository(knexOrm));
	app.set('todoRepository', todoRepository(knexOrm));
	app.set('categoryRepository', categoryRepository(knexOrm));

	return app;
};
