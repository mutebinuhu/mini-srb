import React from 'react';
import {Button, Form} from 'antd';
const FormItem = Form.Item;


export const Login = () =>{
	const handleFormSubmit = (values)=>{
		console.log(values)
	}
	return(
		<>
			<div class="wrapper fadeInDown">
			  <div id="formContent">
			  <div class="fadeIn first">
      			<img src="https://www.pngitem.com/pimgs/m/105-1055419_user-avatar-login-account-profile-people-login-people.png" id="icon" alt="User Icon" style={{width:100, height:100}} />
    			</div>
    			<Form onFinish={(values)=>handleFormSubmit(values)}>
					<FormItem label="Email" name="email">
						<input type="text"  required/>
					</FormItem>
					<FormItem label="Password" name="password">
						<input type="password"  required/>
					</FormItem>
					<FormItem>
						<Button type="primary" htmlType="submit" className='btn btn-primary'>
						  Login
						</Button>
					</FormItem>
				</Form>
    			<div id="formFooter">
      				<a class="underlineHover" href="#">Forgot Password?</a>
    			</div>
			  </div>
			</div>
		</>
		)
}
