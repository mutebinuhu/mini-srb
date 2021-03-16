import React from 'react';
import {Button, Form} from 'antd';
import {Nav} from '../components/Nav';
import {useDispatch, useSelector} from 'react-redux';
import {createProject} from '../redux/actions';


const FormItem = Form.Item;

export const Create = () =>{
	const projectCreating = useSelector(state=>state.projectsReducer)

	const dispatch = useDispatch();
	const handleFormSubmit = (values) =>{
		console.log(values)
		dispatch(createProject(values))


	}
	return(

		<>
			<Nav />
			{projectCreating.creatingProjectErrors ? <p>Errors While creating Project</p>  : ""}
			<div class="wrapper fadeInDown">
			<h3>Add Project</h3>
			{projectCreating.creatingProject ? <p>creating Project.....</p> : ""}
			{projectCreating.creatingProjectErrors ?  projectCreating.errors.errors.map((err)=>{
				return <p>{err.msg}</p>
			}) : ""}
			  <div id="formContent">
			  <div class="fadeIn first">
    			</div>
    			<Form onFinish={(values)=>handleFormSubmit(values)}>
					<FormItem label="Project name" name="name">
						<input type="text"  required/>
					</FormItem>
					<FormItem label="Project description" name="description">
					<textarea type="text"></textarea>
					</FormItem>
					<FormItem>
						<Button type="primary" htmlType="submit" className='btn btn-primary'>
						  Submit
						</Button>
					</FormItem>
				</Form>
    			
			  </div>
			</div>
		</>
		)
}