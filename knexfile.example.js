module.exports = {

	development: {
	  	client: 'mysql',
	  	connection: {
	    	host : '127.0.0.1',
	    	user : 'root',
	    	password : '',
	    	database : 'mern-redux',
	    	charset  : 'utf8'
	  	},
	  	pool: {
		    min: 2,
		    max: 10
		},
	  	seeds: {
	      	directory: './migrations/seeds'
	  	},
	  	useNullAsDefault: true,
	  	tableName: 'migrations'
	},

	staging: {
    	client: 'mysql',
	  	connection: {
	    	host : '127.0.0.1',
	    	user : 'root',
	    	password : '',
	    	database : 'mern-redux',
	    	charset  : 'utf8'
	  	},
	  	pool: {
		    min: 2,
		    max: 10
		},
	  	seeds: {
	      	directory: './migrations/seeds'
	  	},
	  	useNullAsDefault: true,
	  	tableName: 'migrations'
  	},

  	production: {
    	client: 'mysql',
	  	connection: {
	    	host : '127.0.0.1',
	    	user : 'root',
	    	password : '',
	    	database : 'mern-redux',
	    	charset  : 'utf8'
	  	},
	  	pool: {
		    min: 2,
		    max: 10
		},
	  	seeds: {
	      	directory: './migrations/seeds'
	  	},
	  	useNullAsDefault: true,
	  	tableName: 'migrations'
  	},
};
