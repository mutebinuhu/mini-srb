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
			<h2>Register To Continue</h2>
			{auth.registeringUser ? <p>Registering user.......</p> : " "}
			{auth.registeredUser ? auth.registeredUser.message : ""}

			  <div id="formContent">
    			<div className="mt-4">
    				<Form onFinish={(values)=>handleFormSubmit(values)}>
					<FormItem name="email">
						<input type="text"  placeholder="Email" required/>
					</FormItem>
					<FormItem name="password">
						<input type="password" placeholder="Password" className="mt-2"  required/>
					</FormItem>
					<FormItem>
						       <input type="submit" value="submit"  className="mt-2"/>
						       {auth.registeredUser ? window.location.href="/login" : ""}
					</FormItem>
				</Form>
    			</div>
    			

			  </div>
			</div>
		</>
		)
}
