import React from 'react';
import {Button, Form} from 'antd';
import {Nav} from '../components/Nav';
import {useDispatch, useSelector} from 'react-redux';
import {createProject, projectsList} from '../redux/actions';


const FormItem = Form.Item;

export const Create = () =>{
	const projectCreating = useSelector(state=>state.projectsReducer)

	const dispatch = useDispatch();
	const handleFormSubmit = (values) =>{
		console.log(values)
		dispatch(createProject(values))


	}
	const redirectAddProject = () =>{
		dispatch(projectsList())
		window.location.href="/projects"
	}
	return(

		<>
			<Nav />
			{projectCreating.creatingProjectErrors ? <p>Errors While creating Project</p>  : ""}
			<div class="wrapper fadeInDown">
			<h3>Add Project</h3>
			{projectCreating.creatingProjectErrors ?  projectCreating.errors.errors.map((err)=>{
				return <p>{err.msg}</p>
			}) : ""}
			{projectCreating.creatingProject ? <p>creating Project.....</p> : ""}

			{projectCreating.projectCreated ? redirectAddProject() : ""}
			
			  <div id="formContent">
			  <div class="fadeIn first">
    			</div>
    			<Form onFinish={(values)=>handleFormSubmit(values)}>
					<FormItem  name="name" className="mt-3">
						<input type="text"  required  placeholder="Project name"/>
					</FormItem>
					<FormItem  name="description" >
					<textarea type="text" placeholder="description"></textarea>
					</FormItem>
					<FormItem>
						<Button type="primary" htmlType="submit" className='btn btn-primary mb-3'>
						  Submit
						</Button>
					</FormItem>
				</Form>
    			
			  </div>
			</div>
		</>
		)
}