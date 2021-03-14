const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const db = require('./config/database');
db.authenticate().then(()=>console.log('connected to database')).catch(err=>console.log(err))
require('dotenv').config();
const projectsRoutes = require('./routes/projects');
const authRoutes = require('./routes/auth');
let cors = require("cors");


// configure app to use bodyParser()
// get the data from a POST
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', projectsRoutes)
app.use('/', authRoutes)



app.listen(process.env.SERVER_PORT,  ()=>{
	console.log('server started at port 5000')
});

