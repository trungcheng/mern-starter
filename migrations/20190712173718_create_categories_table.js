'use strict';

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('categories', function(table) {
            table.increments('id').primary();
            table.string('name', 255).notNullable();
            table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
            table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'));
        }),
        knex.schema.createTable('posts', function(table) {
            table.increments('id').primary();
            table.integer('cat_id').unsigned().references('id').inTable('categories');
            table.integer('user_id').unsigned().references('id').inTable('users');
			table.string('title', 255).notNullable();
			table.string('intro', 255).nullable();
			table.text('content','longtext').nullable();
			table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
			table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'));
		})
    ]).then(function () {
        console.log('Categories table is created!');
        console.log('Posts table is created!');
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('posts'),
        knex.schema.dropTable('categories')
    ]).then(function () {
        console.log('Posts table was dropped!');
        console.log('Categories table was dropped!');
    });
};
