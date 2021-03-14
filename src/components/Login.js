import React from 'react';
export const Login = () =>{

	return(
	
		<>
			<div class="wrapper fadeInDown">
			  <div id="formContent">
			  <div class="fadeIn first">
      			<img src="https://icon-library.net/images/google-login-icon/google-login-icon-0.jpg" id="icon" alt="User Icon" style={{width:100, height:100}} />
    			</div>
    			<form method = 'POST' action='http://localhost:5000/login'>
			      <input type="text" id="login" class="fadeIn second" name="email" placeholder="Email" />
			      <input type="password" id="password" class="fadeIn third" name="password" placeholder="password" />
			      <input type="submit" class="fadeIn fourth" value="Log In" />
    			</form>
    			<div id="formFooter">
      				<a class="underlineHover" href="#">Forgot Password?</a>
    			</div>
			  </div>
			</div>
		</>
		)
}
