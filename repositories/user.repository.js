'use strict';

class UserRepository {

    constructor(knexOrm) {
		this.connection = knexOrm;
	}

	getUsers() {
        return this.connection.from('users').select('*');
	}

	getUserDetail(id) {
        return this.connection.from('users')
            .where('id', id)
            .select('*');
	}

	countEmail(email) {
        return this.connection.select(this.connection.raw('count(email) as count')).from('users')
			.where({email: email});
	}

	create(data) {
        return this.connection.table('users').insert(data).returning('id');
	}

	findByEmail(data) {
        return this.connection.from('users')
            .where('email', data.email)
            .select('*');
	}

	updateUser(id, data) {
        return this.connection.table('users')
			.where({id: id})
			.update(data);
	}

	deleteUser(id) {
        return this.connection.table('users')
			.where({id: id})
			.del();
	}

}

export default (knexOrm) => new UserRepository(knexOrm);
