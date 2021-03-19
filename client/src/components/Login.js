import React from 'react';
import {Button, Form} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/actions';
import {Link} from 'react-router-dom';

const FormItem = Form.Item;

export const Login = () =>{
	const  auth = useSelector(state=>state.authReducer)
	const dispatch = useDispatch()
	const handleFormSubmit = (values)=>{
		dispatch(login(values))
	}
	
	const redirectLogin = () =>{
		window.location.href = "/home";
	}

	return(
		<>
		{auth.payload.message === "Loging Successful" ? redirectLogin() : ""}
			<div class="wrapper fadeInDown">
			  <h2>Welcome To Srb-mini Project</h2>
			  <h2>Login To Continue</h2>

			{/*show errors*/}
		    {auth.errors.message ? <p className="text-danger fw-bold">Error Has Occured While Logging In </p>: ""}
		    {console.log(auth.errors.message )}
		    {auth.errors.message  ? auth.errors.errors.map((err)=><p className="text-danger">{err.msg}</p>) : ""}


			{auth.loggingIn ? <p>Logging In.....</p> : ""}
			  <div id="formContent">
			  <div class="text-danger">
			  {auth.payload.message ? auth.payload.message.toUpperCase()  : ""}
			  </div>
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
						       <input type="submit" value="Login"/> 
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
