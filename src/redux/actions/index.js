import axios from 'axios';

export const loggingIn = () =>{
	return{
		type:'LOGING_IN'
	}
}

export const registerUser = (data)=>{
	return (dispatch) =>{
		dispatch({
			type:'REGISTERING_USER'
		})
		axios({
		method:'post',
		url:'http://localhost:5000/register',
		data:data
	}).then(res=>{
		console.log(res.data);
		dispatch({
			type:'FINISH_REGISTERING_USER',
			payload:res.data
		})
	}).catch(err=>{
		console.log(err.response.data)
		console.log(dispatch({
			type:'REGISTERING_USER_ERRORS',
			errors:err.errors
		}))
	})
	}
}

export const login = (userData) =>{
	return (dispatch) => {
		dispatch(loggingIn())
		axios({
			method:'post',
			url:'http://localhost:5000/login',
			headers:{ 'Content-Type': 'application/json'},
			data:userData
		}).then( res=>{
			console.log(res.data.token)
			localStorage.setItem('key',res.data.token)

			dispatch({
				type:'LOGGED_IN',
				payload:res.data
			})
		}).catch(errors=>{
			console.log('errors---')
			setTimeout(()=>{
				 dispatch({
				type:'LOGING_IN_ERRORS',
				errors:errors.response.data
			})
				}, 2000)
			 setTimeout(()=>{
			 	console.log( dispatch({
				type:'LOGING_IN_ERRORS',
				errors:errors.response.data
			}))
			 }, 2000)
		})
	
	}

}
export const requestingProjectsData = ()=>{
	return{
		type:'REQUESTING_PROJECTS_DETAILS'
	}
}
export const receivedProjectsData = (projectsdata) =>{
	return{
		type:'RECEIVED_PROJECTS_DETAILS',
		projects:projectsdata.data
	}

}
export const projectsList = () =>{
	return (dispatch) =>{
		dispatch(requestingProjectsData())
	setTimeout(()=>{
			return axios({
			method:'get',
			url:'http://localhost:5000/projects',
			headers:{'Authorization': 'Bearer '+ localStorage.getItem('key')}
		}).then((res)=>{

			console.log(res.data)
			localStorage.setItem('state', {"name":"nuhu"})
			dispatch({
			type:'RECEIVED_PROJECTS_DETAILS',
			projects:res.data
			})
			return true	
		})
		.catch(err=>console.log(err))
	}, 1500)
	

	}
}

export const createProject = (project) =>{
	return (dispatch) =>{
		dispatch({
			type:'CREATING_PROJECT'
		})
		setTimeout(()=>{
			let data = axios({
				method:'post',
				url:'http://localhost:5000/projects/create',
				data:project
			}).then((res)=>{
				console.log(res)
				dispatch({
			type:'FINISHED_CREATING_PROJECT'
		})
			}).catch((err)=>{
				console.log(err.response.data)
				dispatch({
					type:'CREATING_PROJECT_ERRORS',
					errors:err.response.data
				})
				
			})
		}, 2000)
	}
}
