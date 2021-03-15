import {combineReducers} from 'redux';
import authReducer from './authReducer';
import projectsReducer from './projectsReducer';

const allReducers = combineReducers({
	authReducer:authReducer,
	projectsReducer:projectsReducer
});
export default allReducers;