import React from 'react';
import {Button, Form} from 'antd';
import {projectsList} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/actions';
import {Nav} from '../components/Nav';
import {Link} from 'react-router-dom';


const FormItem = Form.Item;
export const Home = () =>{
const dispatch = useDispatch();

const handleClick = () =>{
		dispatch(projectsList())
	}
	return(
		<>
		<Nav />
		<div class="wrapper fadeInDown">
		{localStorage.getItem('key') ? <div className="card" style={{width: "30rem"}}>
					<div className="card-header">
						Actions
					</div>
					<div className="card-body">
					<Link className="btn-block" to="/projects" onClick={handleClick}>
						<button className="btn btn-success btn-block">View Projects</button>
					</Link>
						<br/>
						<Link to="/create" className="btn-block">
							<button class="btn btn-primary btn-block">Add Project</button>
						</Link>
					</div>
				</div>: "Please Login To Continue"}
		</div>
		</>

		)
}

