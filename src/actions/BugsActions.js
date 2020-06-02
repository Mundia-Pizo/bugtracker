import * as types from './actiionTypes';
import axios from 'axios';


export const get_bugs=()=>dispatch => {
    axios.get('http://127.0.0.1:8000/tracker')
    .then(res=>{
        dispatch(
             {
                 type:types.GET_BUGS,
                 payload: res.data,
             });
    }).catch(
        err => console.log(err)
    )
}


export const delete_bug= (id)=>dispatch => {
    axios.get('http://127.0.0.1:8000/tracker')
    .then(res=>{
        dispatch(
             {
                 type:types.DELETE_BUG,
                 payload: id
             });
    }).catch(
        err => console.log(err)
    )
    
}