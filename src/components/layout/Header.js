import React, { Component } from 'react'


export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light header-color">
                <a className="navbar-brand" href="/">PlaceHolder</a>
                <button className="btn btn-outline-success">Add Bug</button>
             </nav>
        )
    }
}

export default Header;
