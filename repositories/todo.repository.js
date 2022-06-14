'use strict';

class TodoRepository {

    constructor(knexOrm) {
		this.connection = knexOrm;
	}

	getTodos() {
		return this.connection.from('todos').select('*');
	}

	getTodoDetail(id) {
        return this.connection.from('todos')
            .where('id', id)
            .select('*');
	}

	create(data) {
        return this.connection.table('todos').insert(data).returning('id');
	}

	updateTodo(id, data) {
        return this.connection.table('todos')
			.where({id: id})
			.update(data);
	}

	deleteTodo(id) {
        return this.connection.table('todos')
			.where({id: id})
			.del();
	}

}

export default (knexOrm) => new TodoRepository(knexOrm);
