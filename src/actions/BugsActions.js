import * as types from './actiionTypes';
import axios from 'axios';
import {tokenConfig} from './auth';


export const get_bugs=()=>(dispatch, getState) => {
    axios.get('http://127.0.0.1:8000/', tokenConfig(getState))
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

 
export const delete_bug= (id)=>(dispatch,getState) => {
    axios.delete(`http://127.0.0.1:8000/${id}`, tokenConfig(getState))
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


export const add_bug=(bug)=>(dispatch, getState) => {
    axios.post('http://127.0.0.1:8000/',bug, tokenConfig(getState))
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