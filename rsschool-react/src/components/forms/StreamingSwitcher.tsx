/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'
import classes from './StreamingSwitcher.module.css'

export interface IStreamingSwitcherProps {
    forwardRef: React.RefObject<HTMLInputElement>
}

export default class StreamingSwitcher extends Component<IStreamingSwitcherProps> {
    render() {
        const { forwardRef } = this.props
        return (
            <div className={classes.container}>
                <label>Streaming</label>
                <div className={classes.choisesContainer}>
                    <div className={classes.choise}>
                        <label htmlFor="Yes">Yes</label>
                        <input
                            id="Yes"
                            name="streaming"
                            type="radio"
                            value="Yes"
                            ref={forwardRef}
                        />
                    </div>
                    <div className={classes.choise}>
                        <label htmlFor="No">No</label>
                        <input
                            id="No"
                            name="streaming"
                            type="radio"
                            value="No"
                            ref={forwardRef}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
