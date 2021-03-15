const initialState = {
	login:False
	payload:""
}
const authReducer = (state=initialState) =>{
	switch(action.type){
		case "LOGIN":
			return{
				...state,
				login:True
			}
	}
}
export default authReducer;