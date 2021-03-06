import React from 'react';
import {Button, Form} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/actions';
import {projectsList} from '../redux/actions';
import {Link} from 'react-router-dom';

import {Nav} from '../components/Nav'

const FormItem = Form.Item;

export const Projects = () =>{
	const dispatch = useDispatch()
	const projects = useSelector(state=>state.projectsReducer)

	const handleClick = () =>{
		dispatch(projectsList())
	}
	const handleRefresh = () =>{
					      
   		window.location.reload()
	}

	const isLoggedIn = window.localStorage.getItem('key')

	
	{/*conditionally rendering the projects component by checking if user is logged in*/}
	if(isLoggedIn){
		return(
		<>
			<Nav />
			<div class="container fadeInDown">
			<h3 className="text-uppercase">Projects List</h3>
			<div class="card  mb-3">
	 	<div class="card-header"><div class="text-right"><Link to="/create"><button class="btn btn-primary">Add Project</button></Link></div></div>
	  		<div class="card-body">
	   		 {projects.requestProject ? <p>Loading..............</p> : ''}
	    		{console.log('---details'+ projects.projectsDetails.success)}
	    		{projects.projectsDetails.success === 'True' ? projects.projectsDetails.data.map((item, i)=>{
	    			return <div className="card mb-5">
	    						    <div>
								    		 <div className="card-header font-weight-bold" key={i}>{item.name}</div>
											<div className="card-body" key={i}>{item.description}</div>
			    					</div>
	    					</div>
	    		}) :  "" }
	  		</div>
			</div>
			
			{handleRefresh}
			<button type="submit" className="btn btn-info" onClick={handleClick}>View Projects</button>
		</div>
		</>
		)
	}else{
		return (
			window.location.href="/"
			)
	}
}
