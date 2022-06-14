'use strict';

import express from 'express';
import Router from 'router';

const router = Router();

// Middleware
import userEmailValid from './middleware/user/user.validate';
import authValid from './middleware/user/auth.validate';
import userRequestValid from './middleware/user/request.validate';

// Controller
import AuthController from './controllers/auth.controller';
import UserController from './controllers/user.controller';
import PostController from './controllers/post.controller';
import TodoController from './controllers/todo.controller';
import CategoryController from './controllers/category.controller';

// auth
router.post('/signin', AuthController.signin);
router.post('/signup', userEmailValid, userRequestValid , AuthController.signup);
router.post('/signup/verify-email', AuthController.verifyEmail);
router.post('/resend-verify-code', AuthController.resendVerification);
router.post('/reset-password', AuthController.resetPassword);
router.post('/reset-password/verify', AuthController.verifyResetPassword);
router.post('/reset-password/new', AuthController.resetPasswordNew);

// user
router.get('/users', authValid, UserController.getUsers);
router.delete('/users/:id', UserController.deleteUser);

// post
router.get('/posts', PostController.getPosts);
router.post('/posts', PostController.addPost);
router.get('/posts/:id', PostController.getPostDetail);

// todo
router.get('/todos', TodoController.getTodos);
router.get('/todos/:id', TodoController.getTodoDetail);

// category
router.get('/categories', CategoryController.getCategories);

module.exports = router;
