const initialState = {
	login:false,
	loggingIn:false,
	errors:"",
	loggedIn:false,
	payload:"",

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
		default:
			return state
	}
}
export default authReducer;