import React, {Component} from 'react';

//Components

//Styles
import './reset.css'
import './navbar-top.css'

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <h1>Wino</h1>
                <ul className="topnav">
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li className="right"><a href="#about">About</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;