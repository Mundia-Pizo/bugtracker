import *as actions from '../actions/actiionTypes';

const initialState = {
    bugs:[],
}

function bugs(state=initialState, action){
    switch (action.type){
        case actions.GET_BUGS:
            return [
                ...state,
                bugs=action.payload,
            ];
        case actions.ADD_BUG:
            return[...state,
                {
                    description: action.payload.description,
                    resolved:false
                }
            ];
        case "DELETE_BUG":
            return[
                ...state,
                {
                    description:action.payload.id,
                }
            ]
        default:
            return state
        }
}


export default bugs;