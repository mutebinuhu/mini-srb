const Sequelize = require('sequelize');
const db = require('../config/database');
const Project = db.define('projects', {
	name:{
		type:Sequelize.STRING
	},
	description:{
		type:Sequelize.STRING
	},
	created_by:{
		type:Sequelize.INTEGER
	},
	createdAt:{
		type:Sequelize.DATE
	},
	updatedAt:{
		type:Sequelize.DATE

	}
});
module.exports = Project;