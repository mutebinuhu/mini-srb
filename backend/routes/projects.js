const express = require('express');
const Router = express.Router();
const Project = require('../models/Project')
const {check, validationResult} = require('express-validator');
Router.get('/projects',(req, res)=>{
	Project.findAll().then(projects=>{
		res.send({data:projects})
		console.log(projects)
		}).catch(err=>res.json(err));
});
Router.post('/projects/create',[

//validation and sanitizing
check('name').isLength({min:10}).withMessage('Must be atleast 10 characters Long').trim().escape(),
check('description').isLength({min:10}).withMessage('Must be atleast 10 characters Long').trim().escape()
	], (req, res)=>{
	const errors = validationResult(req);
	if(!errors.isEmpty()){
		res.status(422).json({
			errors:errors.array()
		})
	}
	let {name, description, created_by} = req.body
	Project.create({
		name,
		description,
		created_by
	}).then(project=>res.json({data:project}))
	.catch(err=>res.send(err))


});
Router.get('/projects/:project', (req, res)=>{
	const data = req.params.project;
	console.log(data)
})
module.exports = Router;