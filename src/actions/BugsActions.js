import * as types from './actiionTypes';
import axios from 'axios';


export const get_bugs=()=>dispatch => {
    axios.get('http://127.0.0.1:8000/')
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
    axios.delete(`http://127.0.0.1:8000/${id}`)
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


export const add_bug=(bug)=>dispatch => {
    axios.post('http://127.0.0.1:8000/',bug)
    .then(res=>{
        dispatch(
             {
                 type:types.ADD_BUG,
                 payload: res.data,
             });
    }).catch(
        err => console.log(err)
    )
}