import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link, Route, HashRouter as Router} from 'react-router-dom';

export class Login extends Component {
    static propTypes = {

    }
    state = { username:'', password: '' }

    render() {
        const {username, password}=this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <form>
                        <legend>Login</legend>
                        <div className="form-group">
                            <label>username</label>
                            <input className="form-control" type="text" name='username' placeholder='Username or email'/>
                            <label>password</label>
                            <input className="form-control" type="password" name='password' placeholder='password'/>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">login</button>
                        <p>
                        Dont have an account? <Link to='/register' className="ml-2">register</Link>
                    </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
