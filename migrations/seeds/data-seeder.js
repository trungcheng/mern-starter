'use strict';

const bcrypt = require('bcrypt-nodejs');

exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return Promise.all([
        knex('users').del(),
        knex('categories').del(),
        knex('todos').del(),
        knex('posts').del(),
        knex('users').insert([
            { id: 1, username: 'trungdn', email: 'trungdn@gmail.com', avatar: 'http://images.vietid.net/avatars/1524213894304avatar-165885822.png', phone: '0898666777', address: 'Hà Nội', password: bcrypt.hashSync('password'), active: 1 },
            { id: 2, username: 'hienlm', email: 'hienlm@gmail.com', avatar: 'http://images.vietid.net/avatars/1524213894304avatar-165885822.png', phone: '0898111222', address: 'Nam Định', password: bcrypt.hashSync('password'), active: 0 },
            { id: 3, username: 'hoangnd', email: 'hoangnd@gmail.com', avatar: 'http://images.vietid.net/avatars/1524213894304avatar-165885822.png', phone: '0898444555', address: 'Hải Phòng', password: bcrypt.hashSync('password'), active: 0 }
        ]),
        knex('categories').insert([
            { id: 1, name: 'Sport' },
            { id: 2, name: 'Music' },
            { id: 2, name: 'Cuisine' }
        ]),
        knex('todos').insert([
            { id: 1, name: 'Todo 1', description: 'desc todo 1', assign_to: '1', status: 0 },
            { id: 2, name: 'Todo 2', description: 'desc todo 2', assign_to: '2', status: 1 },
            { id: 3, name: 'Todo 3', description: 'desc todo 3', assign_to: '3', status: 2 },
            { id: 4, name: 'Todo 4', description: 'desc todo 4', assign_to: '1', status: 1 },
            { id: 5, name: 'Todo 5', description: 'desc todo 5', assign_to: '2', status: 2 },
        ]),
        knex('posts').insert([
            { id: 1, cat_id: 1, user_id: 1, title: 'Post 1', intro: 'Post intro 1', content: 'Post content 1' },
            { id: 2, cat_id: 2, user_id: 1, title: 'Post 2', intro: 'Post intro 2', content: 'Post content 2' },
            { id: 3, cat_id: 1, user_id: 1, title: 'Post 3', intro: 'Post intro 3', content: 'Post content 3' },
        ])
    ]).then(function () {
        console.log('Data seeded all successfully!');
    });

};
