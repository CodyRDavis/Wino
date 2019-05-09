import React, {Component} from 'react';

//Components

//Styles
import './reset.css'
import './navbar-top.css'

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <div className="branding-container">
                    <h1 className="title">Wino</h1>
                    <button className="hamburger">#</button>
                </div>
                
                <div className="menu-container">
                    <ul className="topnav">
                        <li><a href="#">Item 1</a></li>
                        <li><a href="#">Item 2</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;