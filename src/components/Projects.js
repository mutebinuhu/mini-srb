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
	return(
		<>
			<Nav />
			<div class="wrapper fadeInDown">
			<h3>Projects List</h3>
			<div class="card border-primary mb-3">
	 	<div class="card-header"><div class="text-right"><Link to="/create"><button class="btn btn-primary">Add Project</button></Link></div></div>
	  		<div class="card-body text-primary">
	   		 <h3 class="card-title">Projects List</h3>
	   		 {projects.requestProject ? <p>Loading..............</p> : ''}
	    		{console.log('---details'+ projects.projectsDetails.success)}
	    		{projects.projectsDetails.success === 'True' ? projects.projectsDetails.data.map((item, i)=>{
	    			return <div>
								<h3 key={i}>{item.name}</h3>
								<p key={i}>{item.description}</p>
			    			</div>
	    		}) :  "" }


	  		</div>
			</div>
			
			{handleRefresh}
			<button type="submit" onClick={handleClick}>Click</button>
		</div>
		</>
		)
}
