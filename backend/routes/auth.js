require('dotenv').config();
let jwt = require('jsonwebtoken');
const express = require('express');
const Router = express.Router();
const {check, validationResult, body} = require('express-validator')
const User = require('../models/User');
//for hashing the password
const bycrpt = require('bcryptjs');
Router.post('/register',[
//validation and sanitizing
check('email').isEmail().withMessage('invalid email address').isLength({min:5}).withMessage('a minimum of five characters is required').trim().escape(),
check('password').isLength({min:8}).withMessage('a minimum of eight characters is required').trim().escape()

	],  (req, res)=>{
	const errors = validationResult(req);
	//checking for errors
	if(!errors.isEmpty()){
		res.status(400).json({
			success:"False",
			message:'Registration Failed',
			errors:errors.array()
		})
	}
	//getting user details from the form
	const {email, password} = req.body;

	// inserting user to the database
	User.create({
		email,
		password:bycrpt.hashSync(password, 8)
	}).then(user=>res.status(200).json(
		{
			success:"True",
			message:'Registration Successful',
			data:user
		}
		))
	.catch(err=>console.log(err));
});
//login
Router.post('/login',
	[
	check('email').isEmail().withMessage('Email is required').normalizeEmail(),
	check('password').isLength({min:8}).withMessage('password should be atleast 8 digits').trim().escape(),
	], 
	(req, res)=>{
	let errors = validationResult(req);
	if(!errors.isEmpty()){
		res.status(400).json({
			success:"False",
			message:"Login Failed",
			errors:errors.array()
		})
	}
	User.findOne({
		where:{
			email:req.body.email
		}
	}).then(user=>{
		if(!user){
			return res.send({
				success:"False",
				message:`can not find user ${req.body.email}`
			})
		}
		//validate password

		const validPassword = bycrpt.compareSync(req.body.password, user.password)

		//login if password is valid
		

		validPassword ? res.status(200).send({success:"True",message:'Loging Successful', id:user.id, email:user.email}) : res.status(401).send(
			{
			success:"False",
			message:"Passwords Dont Match Here"
			}
		);
		console.log('-----' + user.email)


	}).catch(err=>{
		console.log
	})


})
module.exports = Router;