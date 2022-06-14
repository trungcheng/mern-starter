'use strict';

import redis from 'redis';

const REDIS_HOST 			 = process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.0.1';
const REDIS_PORT 			 = process.env.REDIS_PORT_6379_TCP_PORT || 6379;

// create a new redis client and connect to our local redis instance
const redisCache             = redis.createClient(REDIS_PORT, REDIS_HOST);
// const redisCache 		 = {};

// if connect success, print it to the console
redisCache.on('connect', () => {
    console.log('Redis server has been connected');
});
// if an error occurs, print it to the console
redisCache.on('error', (err) => {
    console.log("Error: " + err);
});

export default redisCache;