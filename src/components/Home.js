import React from 'react';
import {Button, Form} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/actions';
import {Nav} from '../components/Nav'


const FormItem = Form.Item;

export const Home = () =>{
	
	return(
		<>
		<Nav />
		<div class="wrapper fadeInDown">
			Welcome Home
		</div>

		</>
		)
}
