// NAVBAR COMPONENT MED NAVLINKS TILL OLIKA ROUTES

import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className="container">
                <NavLink className="navbar-brand" to="/" exact ><i className="far fa-bicycle"></i></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/" exact >Home</NavLink>
                        <NavLink className="nav-link" to="/customers" exact >Customers</NavLink>
                        <NavLink className="nav-link" to="/register" exact >Register</NavLink>
                        <NavLink className="nav-link" to="/products" exact >Products</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar