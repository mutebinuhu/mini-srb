const initialState = {
	login:false,
	loggingIn:false,
	errors:"empty",
	loggedIn:false,
	payload:""

}
const authReducer = (state=initialState, action) =>{
	switch(action.type){
		case "LOGINGIN":
			return{
				...state,
				loggingIn:true
			}
		case "LOGIN":
			return{
				...state,
				login:true
			}

		case "LOGINGINERRORS":
			return{
				...state,
				errors:"there are errors"
			}
		case "LOGGEDIN":{
			return{
				...state,
				loggedIn:true,
				payload:action.payload
			}
		}
		default:
			return state
	}
}
export default authReducer;