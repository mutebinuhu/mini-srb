const initialState = {
	login:false,
	loggingIn:false,
	errors:"",
	loggedIn:false,
	payload:"",
	registeringUser:false,
	registeredUser:""

}
const authReducer = (state=initialState, action) =>{
	switch(action.type){
		case "LOGING_IN":
			return{
				...state,
				loggingIn:true
			}
		case "LOGIN":
			return{
				...state,
				login:true
			}

		case "LOGING_IN_ERRORS":
			return{
				...state,
				errors:action.errors
				
			}
		case "LOGGED_IN":{
			return{
				...state,
				loggedIn:true,
				payload:action.payload,
				loggingIn:false
			}
		}
		case "REGISTERING_USER":
			return{
				...state,
				registeringUser:true
			}
		case "FINISH_REGISTERING_USER":
			return{
				...state,
				registeringUser:false,
				registeredUser:action.payload
			}
		default:
			return state
	}
}
export default authReducer;