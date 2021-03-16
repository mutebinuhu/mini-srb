import axios from 'axios'
export const loggingIn = () =>{
	alert('loging in')
	return{
		type:'LOGINGIN'
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
		}).then(res=>{

			console.log(res.data)
			dispatch({
				type:'LOGGEDIN',
				payload:res.data
			})
		}).catch(errors=>{
			console.log(errors.response.data.errors)
			dispatch({
				type:'LOGINGINERRORS',
			})
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
	
			return axios({
			method:'get',
			url:'http://localhost:5000/projects'
		}).then((res)=>{

			console.log(res.data)
			dispatch({
			type:'RECEIVED_PROJECTS_DETAILS',
			projects:res.data
			})
			return true	
		})
		.catch(err=>console.log(err))
	

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
