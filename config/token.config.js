import jwt from 'jsonwebtoken';
import { constants } from './constants.config';

export function authToken(result) {
  	return jwt.sign(result, constants.secret, {
		expiresIn: '30 days'
	});
}

export function emailToken(result) {
  	return jwt.sign(result, constants.secret, {
		expiresIn: '15m'
	});
}
