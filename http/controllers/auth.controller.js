'use strict';

import { responseService } from '../../services/response.service';
import { sendVerificationEmail, sendResetPassword } from '../../services/mail.service';
import { constants } from '../../config/constants.config';
import { authToken, emailToken } from '../../config/token.config';
import bcrypt from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

class AuthController {

	signup(req, res, next) {
		let data = req.body;
		let pool = req.app.get('userRepository');
		data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(5));
		pool.create(data)
			.then((result) => {
				let verifyToken = emailToken(data);
				sendVerificationEmail(data.email, data.username, verifyToken);
				responseService.json(res, 200, true, result, 'Signup success');
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
	}

	signin(req, res, next) {
		let data = req.body;
		let pool = req.app.get('userRepository');
		pool.findByEmail(data)
			.then((result) => {
				if (result) {
					let oldPass = result[0].password;
					if (bcrypt.compareSync(data.password, oldPass)) {
						if (result[0].active == 1) {
							let token = authToken(result[0]);
							responseService.json(res, 200, true, { data: result[0] , token: token }, 'Signin success');
						} else {
							responseService.json(res, 400, false, [], 'Not active email, please confirm email now');
						}
					} else {
						responseService.json(res, 422, false, [], 'Email or password invalid');
					}
				} else {
					responseService.json(res, 422, false, [], 'Email or password invalid');
				}
			})
			.catch((error) => {
				console.log(error);
				responseService.json(res, 500, false, [], error);
			});
	}

	verifyEmail(req, res, next) {
		let data = req.body;
		let pool = req.app.get('userRepository');
		pool.findByEmail(data)
			.then((result) => {
				if (result) {
					if (data.token) {
						jwt.verify(data.token, constants.secret, (err, decoded) => {
							if (err) {
								responseService.json(res, 401, false, { resend: true }, 'This link has been used or already expired');
							} else {
								result.save({ active: 1 });
								responseService.json(res, 200, true, { resend: false }, 'Your account has been verified');
							}
						});
					} else {
						responseService.json(res, 401, false, {}, 'No token provided');
					}
				} else {
					responseService.json(res, 404, false, [], 'User not found');
				}
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			})
	}

	resendVerification(req, res, next) {
		let data = req.body;
		let pool = req.app.get('userRepository');
		pool.findByEmail(data)
			.then((result) => {
				if (result) {
					let verifyTokenResend = emailToken(data);
					sendVerificationEmail(data.email, result.get('username'), verifyTokenResend);
					responseService.json(res, 200, true, result, 'Verification email has been resended');
				} else {
					responseService.json(res, 404, false, [], 'User not found');
				}
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
	}

	resetPassword(req, res, next) {
		let data = req.body;
		let pool = req.app.get('userRepository');
		pool.findByEmail(data)
			.then((result) => {
				if (result) {
					let verifyToken = emailToken(data);
					sendResetPassword(data.email, result.get('username'), verifyToken);
					responseService.json(res, 200, true, result, 'Your request has been sent');
				} else {
					responseService.json(res, 404, false, [], 'User not found');
				}
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
	}

	verifyResetPassword(req, res, next) {
		let data = req.body;
		let pool = req.app.get('userRepository');
		pool.findByEmail(data)
			.then((result) => {
				if (result) {
					if (data.token) {
						jwt.verify(data.token, constants.secret, (err, decoded) => {
							if (err) {
								responseService.json(res, 401, false, { resend: true }, 'This link has been used or already expired, please request reset password again');
							} else {
								responseService.json(res, 200, true, { resend: false }, 'Your request has been accepted');
							}
						});
					} else {
						responseService.json(res, 401, false, {}, 'No token provided');
					}
				} else {
					responseService.json(res, 404, false, [], 'User not found');
				}
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
	}

	resetPasswordNew(req, res, next) {
		let data = req.body;
		let pool = req.app.get('userRepository');
		pool.findByEmail(data)
			.then((result) => {
				if (result) {
					if (data.token) {
						jwt.verify(data.token, constants.secret, (err, decoded) => {
							if (err) {
								responseService.json(res, 401, false, { resend: true }, 'This link has been used or already expired, please request reset password again');
							} else {
								let newPass = bcrypt.hashSync(data.newpassword, bcrypt.genSaltSync(5));
								result.save({ password: newPass });
								responseService.json(res, 200, true, { resend: false }, 'Reset password success');
							}
						});
					} else {
						responseService.json(res, 401, false, {}, 'No token provided');
					}
				} else {
					responseService.json(res, 404, false, [], 'User not found');
				}
			})
			.catch((error) => {
				responseService.json(res, 500, false, [], error);
			});
	}
	
}

module.exports = new AuthController;