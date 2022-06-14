import chai from 'chai';
import request from 'request';

describe('MERN', () => {
  	it('should return status 200', () => {
    	request('http://127.0.0.1:3001', res => {
    		chai.expect(res.statusCode).to.equal(200);
    	});
  	});
  	it('should display signin', () => {
	    request('http://127.0.0.1:3001' , (error, response, body) => {
	        chai.expect(body).to.equal('Signin');
	    });
	});
});
