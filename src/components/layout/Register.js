import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link, HashRouter as Router, Redirect} from 'react-router-dom';
import {register} from '../../actions/auth';
import {connect} from 'react-redux';

export class Register extends Component {
    static propTypes = {
     register: PropTypes.func.isRequired,
     isAuthenticate:PropTypes.bool
    }
    state={
        username:'',
        email:'',
        password: '',
        password2: '',
    }
    onChange=event=>this.setState(
        {[event.target.name]:event.target.value},
    )

    onSubmit=event=>{
        event.preventDefault();
        const {username,email, password, password2}=this.state;
        if (password !== password2){
            // this.props.createMessaget();
            console.log("password do not match")

        }else{
            const newUser={
                 username,
                 password,
                 email
                
            };
            this.props.register(newUser);
        }

    }

    render() {
        if(this.props.isAuthenticated){
            return <Redirect to="/"/>;
        }
        const { username, email, password, password2 } = this.state;
        return (
            <Router>
            <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
                <form onSubmit={this.onSubmit}>
                    <legend>Register</legend>
                    <div className="form-group">
                        <label>username</label>
                        <input className="form-control" type="text" name='username' placeholder='Username' value={username} onChange={this.onChange}/>
                        <label>email</label>
                        <input className="form-control" type="email" name='email' placeholder='email' value={email} onChange={this.onChange}/>
                        <label>password</label>
                        <input className="form-control" type="password" name='password' placeholder='password' value={password} onChange={this.onChange}/>
                        <label>comfirm password</label>
                        <input className="form-control" type="password" name='password2' placeholder='comfirm password' value={password2} onChange={this.onChange}/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">sign up</button>
                    <p>
                        Aready have an account? <Link to='/login' className="ml-2">login</Link>
                    </p>
                </form>
                </div>
            </div>
            </Router>
        )
    }
}
const mapStateToProps = state=>({
   isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps, {register})(Register);
