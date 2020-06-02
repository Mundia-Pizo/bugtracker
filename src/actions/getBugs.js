import {GET_BUGS} from './actiionTypes';

export const get_bugs=()=>dispatch => {
    fetch('http://127.0.0.1:8000/tracker/')
    .then(response => response.json())
    .then(response=>dispatch({
        type: GET_BUGS,
        payload: response.data
    })).catch(
        error => console.log(error));  
}
