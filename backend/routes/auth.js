const express = require('express');
const Router = express.Router();
const User = require('../models/User');
Router.post('/register', (req, res)=>{
	const {email, password} = req.body;
	User.create({
		email,password
	}).then(user=>res.send({data:user}))
	.catch(err=>console.log(err));
});
module.exports = Router;