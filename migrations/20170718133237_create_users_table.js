'use strict';

exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('username', 255).notNullable();
        table.string('email', 255).notNullable();
        table.string('avatar', 255).nullable();
        table.string('phone', 255).nullable();
        table.string('address', 255).nullable();
        table.string('password', 255).notNullable();
        table.boolean('active').default(0);
        table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'));
    }).then(function () {
        console.log('Users table is created!');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
        .then(function () {
            console.log('Users table was dropped!');
        });
};
