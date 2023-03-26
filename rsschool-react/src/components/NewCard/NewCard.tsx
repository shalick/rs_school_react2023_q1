import React from 'react'
import { Component } from 'react'
import classes from './NewCard.module.css'

class NewCard extends Component {
    render = () => (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} />
            </p>
            <p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
            </p>
        </form>
    )
}

export default NewCard
