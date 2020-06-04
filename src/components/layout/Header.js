import React, { Component } from 'react'
import {Link}  from 'react-router-dom';


export class Header extends Component {
    render() {
        return (
                <nav className="navbar  navbar-light header-color">
                    <Link to='/' className="navbar-brand">PlaceHolder</Link>
                    <ul className="row ml-auto ml-4 mr-4 ">
                        <li className="nav-item mr-2"></li>
                        <li className="nav-item mr-2"><Link to='/register'>Register</Link></li>
                        <li className="nav-item mr-2"><Link to="/login">login</Link></li>
                        <li className="nav-item mr-2"><Link to ="/addbug"><button className="btn btn-outline-success">Add Bug</button></Link></li>
                    </ul>
                </nav>
        )
    }
}

export default Header;
