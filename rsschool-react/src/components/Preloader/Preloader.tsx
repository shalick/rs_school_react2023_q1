import React from 'react'
import classes from './Preloader.module.css'

export const Loader = () => {
    const loadingMsg = 'Loading ...'

    return (
        <div className={classes.wrapper} data-testid="loader">
            <span className={classes.loader}></span>
            <h2 className={classes.heading}>{loadingMsg}</h2>
        </div>
    )
}

export default Loader
