const initialState = {
	
	payload:[],
	projects:[],
	requestProject:false,
	projectsDetails:"",
	creatingProject:false,
	creatingProjectErrors:false,
	errors:"",
	projectCreated:false

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

		case 'CREATING_PROJECT':
			return{
				...state,
				creatingProject:true
			}
			case 'CREATING_PROJECT_ERRORS':
			return{
				...state,
				creatingProjectErrors:true,
				errors:action.errors
			}
		case 'FINISHED_CREATING_PROJECT':
			return{
				...state,
				creatingProject:true,
				projectCreated:true
			}
		
		default:
			return state
	}
}
export default projectsReducer;