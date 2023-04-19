import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
    return (
        <nav className="headerNav">
            <NavLink
                className={({ isActive }) =>
                    `headerLink ${isActive ? 'activeLink' : ''}`
                }
                to="/"
                data-testid="main-link"
            >
                Main
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `headerLink ${isActive ? 'activeLink' : ''}`
                }
                to="Form"
                data-testid="form-link"
            >
                Form
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `headerLink ${isActive ? 'activeLink' : ''}`
                }
                to="about"
                data-testid="about-link"
            >
                About
            </NavLink>
        </nav>
    )
}
