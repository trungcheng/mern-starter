'use strict';

exports.up = function (knex, Promise) {
    return knex.schema.createTable('todos', function (table) {
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.string('description', 255).nullable();
        table.integer('assign_to').unsigned().references('id').inTable('users');
        table.integer('status').default(0);
        table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'));
    }).then(function () {
        console.log('Todos table is created!');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('todos')
        .then(function () {
            console.log('Todos table was dropped!');
        })
};
