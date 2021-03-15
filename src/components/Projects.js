import React from 'react';
import {Button, Form} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/actions';
import {projectsList} from '../redux/actions';

import {Nav} from '../components/Nav'

const FormItem = Form.Item;

export const Projects = () =>{
	const dispatch = useDispatch()
	const projects = useSelector(state=>state.projectsReducer)

	const handleClick = () =>{
		dispatch(projectsList())
	}
	return(
		<>
			<Nav />
			<div class="wrapper fadeInDown">
			<h3>Projects List</h3>
			<div class="card border-primary mb-3">
	 	<div class="card-header">Project Header</div>
	  		<div class="card-body text-primary">
	   		 <h5 class="card-title">Project List</h5>
	   		 {projects.requestProject ? <p>Loading..............</p> : ''}
	    		{console.log('---details'+ projects.projectsDetails.success)}
	    		{projects.projectsDetails.success === 'True' ? projects.projectsDetails.data.map((i)=>{
	    			return <div>
								<h3>{i.name}</h3>
								<p>{i.description}</p>
			    			</div>
	    		}) :  alert("false") }
	    		


	  		</div>
			</div>
			<button type="submit" onClick={handleClick}>Click</button>
		</div>
		</>
		)
}
