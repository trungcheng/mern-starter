'use strict';

class CategoryRepository {

    constructor(knexOrm) {
		this.connection = knexOrm;
	}

	getCategories() {
        return this.connection.from('categories').select('id', 'name');
	}

}

export default (knexOrm) => new CategoryRepository(knexOrm);
