import {combineReducers} from "redux";
import bugs from './bugsReducer';
import auth from './authreducer';

const rootReducer= combineReducers({
   bugsReducer:bugs,
   auth
});


export default rootReducer;