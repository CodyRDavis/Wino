import React, {Component} from 'react';

//Components

//Styles
import './reset.css'
import './navbar-top.css'

class Navbar extends Component {
    render() {
        return(
            <div className = "navbar">
                <div className="title"><h1>Wino</h1></div>
                <div className="menu">
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;