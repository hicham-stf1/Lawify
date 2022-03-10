import React, { Component } from 'react'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
                <a href="#banner"><i className="fa fa-fw fa-user"></i>Plus d'information</a>
                <a href="#contactnav"><i className="fa fa-fw fa-envelope"></i>Contact</a>
            </nav>
        )
    }
}

export default Navbar
