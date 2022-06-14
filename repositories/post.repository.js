'use strict';

class PostRepository {

    constructor(knexOrm) {
		this.connection = knexOrm;
	}

	getPosts() {
        return this.connection.from('posts as p')
            .leftJoin('categories as c', 'c.id', 'p.cat_id')
            .leftJoin('users as u', 'u.id', 'p.user_id')
            .select(
                'p.id as postId',
                'p.title as postTitle',
                'p.intro as postIntro',
                'p.content as postContent',
                'c.name as cateName',
                'u.username as userName'
            );
	}

	getPostDetail(id) {
        return this.connection.from('posts as p')
            .leftJoin('categories as c', 'c.id', 'p.cat_id')
            .leftJoin('users as u', 'u.id', 'p.user_id')
            .where('p.id', id)
            .select(
                'p.id as postId',
                'p.title as postTitle',
                'p.intro as postIntro',
                'p.content as postContent',
                'c.name as cateName',
                'u.username as userName'
            );
	}

	addPost(data) {
        return this.connection.table('posts').insert(data).returning('id');
	}

	updatePost(id, data) {
        return this.connection.table('posts')
			.where({id: id})
			.update(data);
	}

	deletePost(id) {
        return this.connection.table('posts')
			.where({id: id})
			.del();
	}

}

export default (knexOrm) => new PostRepository(knexOrm);
