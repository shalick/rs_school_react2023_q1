import { Component } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../NavBar/NavBar'
import classes from './Header.module.css'
export class Header extends Component {
    render = () => (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.headerContainer}>
                    <Link to="/" className={classes.logo}>
                        <svg width="0" height="0" className="display-none">
                            <symbol
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 16 16"
                                id="movie-svgrepo-com"
                            >
                                <path d="M12 7v-3h-12v9h12v-3l4 2v-7l-4 2zM9 11h-7v-5h7v5z"></path>
                                <path d="M5 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path>
                                <path d="M8 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path>
                            </symbol>
                        </svg>
                        <svg className={classes.logoPic}>
                            <use xlinkHref="#movie-svgrepo-com"></use>
                        </svg>
                        <span>Movie App</span>
                    </Link>
                    <NavBar />
                </div>
            </div>
        </header>
    )
}
