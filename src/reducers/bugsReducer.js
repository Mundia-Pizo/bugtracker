import * as actions from '../actions/actiionTypes';

const initialState = {
    bugs:[],
}

function bugs(state=initialState, action){
    switch (action.type){
        case actions.GET_BUGS:
            return {
                ...state,
                bugs:action.payload,
            };
        case actions.ADD_BUG:
            return{
                ...state,
                bugs:[...state.bugs, action.payload]
            };
        case actions.DELETE_BUG:
            return{
                ...state,
                 bugs:state.bugs.filter(bug => bug.id !== action.payload)
            }
        default:
            return state;
        }
}


export default bugs;