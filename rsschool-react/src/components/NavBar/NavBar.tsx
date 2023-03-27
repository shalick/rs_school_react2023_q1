import React from 'react'
import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export class NavBar extends Component {
    render = () => (
        <nav className="headerNav">
            <NavLink
                className={({ isActive }) =>
                    `headerLink ${isActive ? 'activeLink' : ''}`
                }
                to="/"
            >
                Main
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `headerLink ${isActive ? 'activeLink' : ''}`
                }
                to="about"
            >
                About
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `headerLink ${isActive ? 'activeLink' : ''}`
                }
                to="Form"
            >
                Form
            </NavLink>
        </nav>
    )
}
