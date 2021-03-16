import React from 'react';
import {Button, Form} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {registerUser} from '../redux/actions';
import {Link} from 'react-router-dom';

const FormItem = Form.Item;

export const Register = () =>{
	const  auth = useSelector(state=>state.authReducer)
	const dispatch = useDispatch()
	const handleFormSubmit = (values)=>{
		dispatch(registerUser(values))
	}

	return(
		<>
			<div class="wrapper fadeInDown">
			<h3>Register</h3>
			  <div id="formContent">
    			<Form onFinish={(values)=>handleFormSubmit(values)}>
					<FormItem label="Email" name="email">
						<input type="text"  required/>
					</FormItem>
					<FormItem label="Password" name="password">
						<input type="password"  required/>
					</FormItem>
					<FormItem>
						       <input type="submit" value="submit"/>

					</FormItem>
				</Form>
    			<div id="formFooter">
      				<Link to="/register"><a class="underlineHover">Dont Have Account?</a></Link>
    			</div>
			  </div>
			</div>
		</>
		)
}
