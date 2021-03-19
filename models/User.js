const Sequelize = require('sequelize');
const db = require('../config/database');
const User = db.define('users', {
	id:{
		type:Sequelize.STRING, primaryKey:true, unique:true
	},
	email:{
		type:Sequelize.STRING,
		unique:true
	},
	password:{
		type:Sequelize.STRING
	}
});
module.exports = User;