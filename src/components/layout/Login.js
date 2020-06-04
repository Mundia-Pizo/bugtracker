import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Login extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <form>
                        <legend>Login</legend>
                        <div className="form-group">
                            <label>username</label>
                            <input className="form-control" type="text" name='username' placeholder='Username or email'/>
                            <label>password</label>
                            <input className="form-control" type="password" name='username' placeholder='password'/>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
