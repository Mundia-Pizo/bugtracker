import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';

export class Login extends Component {
    static propTypes = {
      login: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool
    }
    state = { username:'', password: '' }

    handleInputChange=event => this.setState({
        [event.target.name]:event.target.value
    })
    onSubmit=event=>{
        event.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    render() {
        if(this.props.isAuthenticated){
            return <Redirect to="/"/>;
        }
        const {username, password}=this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <form onSubmit={this.onSubmit}>
                        <legend>Login</legend>
                        <div className="form-group">
                            <label>username</label>
                            <input className="form-control" type="text" name='username' placeholder='Username or email' value={username} onChange={this.handleInputChange}/>
                            <label>password</label>
                            <input className="form-control" type="password" name='password' placeholder='password' value={password} onChange={this.handleInputChange}/>
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
const mapStateToProps = state=>({
      isAuthenticated: state.auth.isAuthenticated
    })
export default connect(mapStateToProps, {login})(Login);
 