const express = require('express');
const Router = express.Router();
const {check, validationResult} = require('express-validator')
const User = require('../models/User');
//for hashing the password
const bycrpt = require('bcryptjs');
Router.post('/register',[
//validation and sanitizing
check('email').isEmail().isLength({min:5}).withMessage('a minimum of five characters is required').trim().escape(),
check('password').isLength({min:8}).withMessage('a minimum of eight characters is required').trim().escape()

	],  (req, res)=>{
	const errors = validationResult(req);
	if(!errors.isEmpty()){
		res.status(400).json({
			success:"False",
			message:'Registration Failed',
			errors:errors.array()
		})
	}
	const {email, password} = req.body;

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
module.exports = Router;