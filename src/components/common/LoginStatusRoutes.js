import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from "react-redux";


const LoginStatuRoute=({component: Component, auth, ...rest})=> {
    return (
        <Route 
         {...rest}
         render={props=>{
             if (!auth.isAuthenticated) {
              <
             }
             else if (!auth.isAuthenticated){
               return <Redirect to="/login"/>
             }
             else{
               return <Component {...props}/>;
             }
            
         }}
        />
    )
}

const mapStateToProps=state => ({ 
    auth: state.auth
})

export default connect(mapStateToProps)(LoginStatuRoute);