import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Register extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
                <form>
                    <legend>Register</legend>
                    <div className="form-group">
                        <label>username</label>
                        <input className="form-control" type="text" name='username' placeholder='Username'/>
                        <label>email</label>
                        <input className="form-control" type="email" name='username' placeholder='email'/>
                        <label>password</label>
                        <input className="form-control" type="password" name='username' placeholder='password'/>
                        <label>comfirm password</label>
                        <input className="form-control" type="password" name='username' placeholder='comfirm password'/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">sign up</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Register;
