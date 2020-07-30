import React, { Component } from 'react'
import '../NavCSS/Nav.css'
import Register from '../Authemtication/Register'
import Login from '../Authemtication/Login'
import {Link} from 'react-router-dom'
 class Navbar extends Component {

    
    render() {
        
        return (
            <div className="mainnav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="/regist">Contact</a></li>
                </ul>
                <Register/>
                <Login />
            </div>
        )
    }
}

export default Navbar
