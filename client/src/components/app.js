import React, { Component } from 'react'

//components
import Navbar from "./navbar-top"

//styles
import './reset.css'
import './app.css'

class App extends Component {
  render() {

    return (
        <div>
            <Navbar />
            <div>
                <h1>Cody R Davis</h1>
            </div>
        </div>
    )
  }
}

export default App;