const initialState = {
	
	payload:[],
	projects:[],
	requestProject:false,
	projectsDetails:""

}
const projectsReducer = (state=initialState, action) =>{
	switch(action.type){
		case 'REQUESTING_PROJECTS_DETAILS':
			return{
				...state,
				projects:"",
				requestProject:true
			}
		case 'RECEIVED_PROJECTS_DETAILS':{
			return{
				...state,
				projectsDetails:action.projects,
				requestProject:false
			}
		}
		case "PROJECTS_LIST":
			return{
				...state,
				payload:action.payload
			}

		
		default:
			return state
	}
}
export default projectsReducer;