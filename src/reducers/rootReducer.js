import {combineReducers} from "redux";
import bugs from './bugsReducer';

const rootReducer= combineReducers({
   bugsReducer:bugs,
});


export default rootReducer;