import axios from 'axios';
import * as types from './actiionTypes';

//check token and load user 
export const loadUser=()=>(dispatch, getState)=>{
    // user loading
    dispatch({type: types.USER_LOADING})
    // get the token form the payload
    const token = getState().auth.token
    // Headers with axios we set a config

    const config={
        headers: {
            'Content-Type':'application/json'
         }
    }
    // if token, add to headers config
    if(token){
        config.headers['Authorization']=`Token  ${token}`
    }
    axios.get('http://localhost:8000/api/auth/user/',config)
    .then(response=>{
        dispatch({
            type:types.USER_LOADED,
            payload: response.data
        })
    }).catch(
    error => console.log(error)
)
}


export const login=(username,password)=>(dispatch)=>{

    const config={
        headers: {
            "Content-Type":"application/json"
         }
    }
    //request body
    const body=JSON.stringify({username,password})
    // if token, add to headers config
    axios.post("http://localhost:8000/user/login/",body,config)
    .then(response=>{
        dispatch({
            type:types.LOGIN_SUCCESS,
            payload: response.data
        })
    }).catch(
    error => console.log(error)
)
}

//check token and load user 
export const logoutUser=()=>(dispatch, getState)=>{
  

    // get the token form the payload
    const token = getState().auth.token
    // Headers with axios we set a config

    const config={
        headers: {
            'Content-Type':'application/json'
         }
    }
    // if token, add to headers config
    if(token){
        config.headers['Authorization']=`Token  ${token}`
    }
    axios.post('http://localhost:8000/api/auth/logout/',null,config)
    .then(response=>{
        dispatch({
            type:types.LOGOUT_SUCCESS,
        })
    }).catch(
    error => console.log(error) 
)
}
