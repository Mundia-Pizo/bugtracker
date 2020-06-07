import React, { Component } from 'react'
import {Link}  from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logoutUser} from '../../actions/auth';


export class Header extends Component {
    static propTypes={
        auth: PropTypes.object.isRequired,
        logoutUser:PropTypes.func.isRequired
    }
    render() {
        const {isAuthenticated, user} =this.props.auth;

        const authLinks=(
         <ul className="row ml-auto ml-4 mr-4 ">
             <span className="navbar-text mr-3">
                 <strong className="text-primary">
                   {user ? `Welcome ${user.username}`:''}
                 </strong>
                 
             </span>
            <li className="nav-item mr-2"><Link to ="/addbug"><button className="btn btn-outline-success">Add Bug</button></Link></li>
            <li className="nav-item mr-2"><button onClick={this.props.logoutUser} className="nav-link btn btn-success btn-sm ">Logout</button></li>
        </ul>
        )


        const guestLinks=(
            <ul className="row ml-auto ml-4 mr-4 ">
               <li className="nav-item mr-2"><Link to='/register'>Register</Link></li>
               <li className="nav-item mr-2"><Link to="/login">login</Link></li>
           </ul>
           )

        return (
                <nav className="navbar  navbar-light header-color">
                    <Link to='/' className="navbar-brand">PlaceHolder</Link>
                    {/* // this is a tenary operator saying if is authenticated show authlinks otherwise guestlinks */}
                    {isAuthenticated ? authLinks: guestLinks}
                    
                </nav>
        )
    }
}
const mapStateToProps=state => ({ auth:state.auth })

export default  connect(mapStateToProps, {logoutUser})(Header);
