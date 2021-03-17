const express = require('express');
const Router = express.Router();
const Project = require('../models/Project');
const jwt = require("jsonwebtoken");


const {check, validationResult} = require('express-validator');
Router.get('/projects', authenticateUser,(req, res)=>{
	Project.findAll().then(projects=>{
		 res.send(
			{
				success:"True",
				data:projects
		})
		console.log(projects)
		const user = {email:user.email}
		const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
		}).catch(err=>res.json(err));
});
//create a project
Router.post('/projects/create', [

//validation and sanitizing
check('name').isLength({min:10}).withMessage('Project Name Must be atleast 10 characters Long').trim().escape(),
check('description').isLength({min:10}).withMessage('Project Description Must be atleast 10 characters Long').trim().escape()
	], (req, res)=>{
	const errors = validationResult(req);
	if(!errors.isEmpty()){
		res.status(400).json({
            success:"False",
            message:"Failed To Create Project",
			errors:errors.array()
		});
	}

	let {name, description, created_by} = req.body
	Project.create({
		name,
		description,
		created_by:2
	}).then(project=>res.status(200).json(
		{	success:"True",
			message:"Project Successfully Created",
			data:project
		}

		))
	.catch(err=>res.send(err))


});
Router.get('/projects/:project', (req, res)=>{
	const data = req.params.project;
	console.log(data)
})
function authenticateUser(req, res, next){
	const authHeader = req.headers['authorization'];
	const token =  authHeader && authHeader.split(' ')[1];
	if(token == null) return res.sendStatus(401)
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
		if(err) res.sendStatus(403)
			req.user = user
		    next()

	})
}
module.exports = Router;