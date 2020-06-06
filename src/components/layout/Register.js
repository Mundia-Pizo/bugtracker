import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {Link, HashRouter as Router} from 'react-router-dom';

export class Register extends Component {
    static propTypes = {

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

    render() {
        const { username, email, password, password2 } = this.state;
        return (
            <Router>
            <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
                <form>
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

export default Register;
